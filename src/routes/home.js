import Scanner from '../components/scanner.js';
import { useNavigate } from 'react-router-dom';

export default () => {
	function scan(text, result, stop) {
		console.log('Text: ', text, ' Result: ', result);
		navigate(`/result`, { state: { code : text }, replace: true });
	}

	const navigate = useNavigate();

	return (
		<>
			<Scanner callback={ scan } style={ {  } } />
			<h4 style={ { position: 'absolute', textAlign: 'center', color: 'white', top: 0, width: '100%', padding: 12 } }>Scan for QR Code</h4> 
		</>
	);
}
