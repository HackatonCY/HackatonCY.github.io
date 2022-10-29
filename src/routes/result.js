import { useLocation } from "react-router-dom";

import Logo from '../mark.jpeg';

export default () => {
	const { state } = useLocation();
	//console.log('code ', state.code);

	return (
		<div style={ { textAlign: 'center' } }>
			<img src={ Logo }/>
			<h3>Status: Verified</h3>
			<br/>
			<h4>Manufacturer: KEO</h4>
			<h4>Location: Limassol, Cyprus</h4>
			<h4>Item type: Beer</h4>
			<h4>Production date: 01/02/2022</h4>
		</div>
	);
}
