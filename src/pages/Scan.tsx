import React, {useCallback, useEffect, useMemo} from "react";
import {Html5Qrcode} from "html5-qrcode";
import {Html5QrcodeError, Html5QrcodeResult} from "html5-qrcode/esm/core";
import {f7ready, Navbar, Page} from "framework7-react";
import Framework7 from "framework7";
import {useWindowSize} from "../utils/use-window-size";


export interface ScanResult {
    productId: string
}


export interface ScanProps {
    onScanned(res: ScanResult): void

    onError(err: string): void

    onBackClick(): void
}

let counter = 0;

export const Scan: React.FC<ScanProps> = (props: ScanProps) => {

    const wSize = useWindowSize();

    const readerEltId = useMemo<string>((): string => {
        return "reader-" + (++counter);
    }, []);

    const successCallback = useCallback((decodedText: string, result?: Html5QrcodeResult) => {
        props.onScanned({
            productId: decodedText
        })
    }, [props.onScanned]);

    const errorCallback = useCallback((errorMessage: string, error?: Html5QrcodeError) => {
        props.onError(errorMessage);
    }, [props.onError])

    useEffect(() => {
        const html5QrCode = new Html5Qrcode(readerEltId);
        let startPromise = main();

        async function main(): Promise<any> {
            const devices = await Html5Qrcode.getCameras();

            let currentCameraIndex = 0;
            if (devices && devices.length) {
                currentCameraIndex = devices.length - 1;
            } else {
                errorCallback('Camera not found')
            }

            return html5QrCode.start(
                devices[currentCameraIndex].id,
                {
                    fps: 10,
                    qrbox: (viewfinderWidth, viewfinderHeight) => {
                        const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
                        const qrboxSize = Math.floor(minEdgeSize * 0.70);
                        return {
                            width: qrboxSize,
                            height: qrboxSize,
                        };
                    },
                },
                successCallback,
                errorCallback
            );
        }

        return () => {
            startPromise.finally(() => {
                html5QrCode.stop()
                    .catch((err) => {
                        console.warn("error while html5QrCode.stop()", err)
                    });
            });
        };
    }, []);

    return (
        <Page>
            <Navbar title={"Scan a product QR code"} backLink={"Back"} />
            <div id={readerEltId} style={{width: `${wSize.width}px`, height: `${wSize.width}px`}}/>
        </Page>
    );
}
