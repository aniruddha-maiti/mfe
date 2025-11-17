import React from "react";
import { StylesProvider } from "@material-ui/core";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing"

export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}