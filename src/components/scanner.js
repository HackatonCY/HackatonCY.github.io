import React, { useEffect } from 'react';
import { Html5Qrcode } from "html5-qrcode";

export default ({ callback }) => {
	useEffect(() => {
		const html5QrCode = new Html5Qrcode('reader');

		async function main() {
			const devices = await Html5Qrcode.getCameras();
			const cameraId = devices && devices.length ? devices[0].id : null;

			await html5QrCode.start(cameraId, 
				{
					fps: 10,
					qrbox: { width: 250, height: 250 },
				},
				(text, result) => {
					return callback(text, result, () => {
						return html5QrCode.stop();
					});
				},
				(errorMessage) => {
					// parse error, ignore it.
				});
		}

		main().catch(console.error);

		return () => {
			html5QrCode.stop();
		};
	}, []);

	return (
		<div id='reader'/>
	);
}