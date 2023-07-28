import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import SignUp from './SignUp';
import Cart from './Cart';
import SignIn from './SignIn';

const ReactRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </>
    );
};

export default ReactRoutes;
