import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';



export const AuthRouter = () => {

    return (
        <div className="auth__main">
            <h1 className="auth__title main">Notes App</h1>
            <hr />

            <div className="auth__box-container">

                <Switch>

                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact to='/auth/register' component={RegisterScreen} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
