import React from "react";
import { mount } from "auth/AuthApp";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from 'react-router-dom';

export default (({ onSignIn }) => {

    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            //For handling the routing from child apps
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;

                //Prevent the infinite loop here
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            },
            onSignIn
        });

        //Whenever there is a change in hintory we will call onParentNavigate
        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
})