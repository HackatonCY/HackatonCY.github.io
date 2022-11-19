import './App.css';
import React, {createRef, useRef, useState} from "react";
import ons from 'onsenui';
import { Navigator } from 'react-onsenui';
import {Home} from "./pages/Home";
import {Scan, ScanResult} from "./pages/Scan";
import {Product} from "./pages/Product";

export interface AppProps {

}

export interface Route {
	component: React.FC<any>
	props: any
}

export const App: React.FC<AppProps> = (props: AppProps) => {

	const navigator = createRef<Navigator>();

	const renderPage = (route: any, navigator: Navigator) => {
		const props = route.props || {};

		return React.createElement(route.component, props);
	}

	return (
		<Navigator
			ref={navigator}
			renderPage={renderPage}
			initialRoute={{
				component: Home,
				props: {
					key:"home",
					onScanClick: () => {
						navigator.current?.pushPage({
							component: Scan,
							props: {
								onScanned(res: ScanResult): void {
									navigator.current?.pushPage({
										component: Product,
										props: {
											productId: res.productId
										}
									});
								},

								onError(err: string): void {
									console.error(err);
								},

								onBack():void {
									navigator.current?.popPage();
								},
							}
						})
					}
				}
			}}
		/>
	);
}
