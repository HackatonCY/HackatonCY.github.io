import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from "html5-qrcode";

export default ({ callback }) => {
	const [ deviceList, setDeviceList ] = useState([]);
	const [ cameraIndex, setCameraIndex ] = useState(0);

	useEffect(() => {
		const html5QrCode = new Html5Qrcode('reader');

		async function main() {
			console.log('111');
			const devices = await Html5Qrcode.getCameras();
			setDeviceList(devices);

			let currentCameraIndex = 0;
			if (devices && devices.length) {
				currentCameraIndex = devices.length - 1;
			} else {
				throw new Error('Camera not found')
			}
			setCameraIndex(currentCameraIndex);

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
				(text, result) => {
					return callback(text, result, () => {
						return html5QrCode.stop();
					});
				},
				(errorMessage) => {},
			);
		}

		main().catch(console.error);

		return () => {
			html5QrCode.stop();
		};
	}, []);

	function switchCamera() {
		setCameraIndex(cameraIndex === deviceList.length - 1 ? 0 : cameraIndex + 1);
	}

	return (
		<>
			<div id='reader' style={ { width: '100%', height: '100%' } } />
			{
				// deviceList.length > 1 ??
					<button onClick={ switchCamera }>Switch camera</button>
			}
		</>
	);
}