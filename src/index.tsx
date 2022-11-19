import React from 'react';
import ReactDOM from 'react-dom/client';

import Framework7 from "framework7";
import "framework7/css/bundle";
import "framework7-icons/css/framework7-icons.css";

import Framework7React, {App, View} from "framework7-react";
import {AppProps} from "framework7-react/components/app";
import routes from "./routes";

Framework7.use(Framework7React);

const appProps:AppProps = {
    name: "",
    routes: routes
}

const rootElt = document.getElementById('root');
if (rootElt) {
    const root = ReactDOM.createRoot(rootElt);
    root.render(
        <React.StrictMode>
            <App {...appProps}>
                <View main url={"/"} />
            </App>
        </React.StrictMode>
    );
} else {
    console.error("No #root element was found")
}
