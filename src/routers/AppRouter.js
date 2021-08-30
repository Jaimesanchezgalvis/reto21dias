import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { firebase } from '../firebase/firebase-config'

import { JournalScreen } from '../components/auth/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';



export const AppRouter = () => {

    const dispath = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged( async(user) => {

            if (user?.uid) {
                dispath(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispath(startLoadingNotes( user.uid ));

            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

    }, [dispath, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        // exact
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticaded={isLoggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuthenticaded={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
