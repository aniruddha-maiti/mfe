import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
    console.log('jjjjjjj', initialPath);
    //For handling the Routing in the Child Apps
    //if it is running standalone in dev server then defaultHistory is available and use that
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        history.listen(onNavigate); //If any change in the history object then it will call this onNavigate callback
    }
    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    //Handle routing down to the container application
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            console.log(pathname);
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};


if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_auth-dev-root");
    if (devRoot) {
        //defaultHistory is used to handle navigation when the app is running in standalone
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    };
};


export { mount }