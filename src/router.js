import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/home.js';
import Result from './routes/result.js';

export default () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="result" element={<Result />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}