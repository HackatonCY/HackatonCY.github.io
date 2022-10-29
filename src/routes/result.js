import { useLocation } from "react-router-dom";

export default ({ route }) => {
	const { state } = useLocation();
	console.log('code ', state.code);

	return (
		<div>{ state.code }</div>
	);
}
