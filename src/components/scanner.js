import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from "html5-qrcode";

export default ({ callback }) => {
	useEffect(() => {
		const html5QrCode = new Html5Qrcode('reader');

		async function main() {
			const devices = await Html5Qrcode.getCameras();

			let currentCameraIndex = 0;
			if (devices && devices.length) {
				currentCameraIndex = devices.length - 1;
			} else {
				throw new Error('Camera not found')
			}

			await html5QrCode.start(devices[currentCameraIndex].id, 
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
				callback,
			);
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