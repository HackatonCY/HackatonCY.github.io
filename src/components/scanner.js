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
					qrbox: (viewfinderWidth, viewfinderHeight) => {
						const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
						const qrboxSize = Math.floor(minEdgeSize * 0.50);
						return {
							width: qrboxSize,
							height: qrboxSize,
						};
					},
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
		<div id='reader' style={ { width: '100%', height: '100%' } } />
	);
}