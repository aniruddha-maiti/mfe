import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";


//This is to stop collision on to the CSS class name between diff MFE projects
const generateClassname = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassname}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}