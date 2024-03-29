import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux'

import validator from 'validator';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)
    console.log(msgError)


    const [formValues, handleInputChange] = useForm(
        {
            name: 'jaime',
            email: 'jaime@gmail.com',
            password: '123456',
            password2: '123456',
        }
    );

    const { name, email, password, password2 } = formValues;


    const handleRegister = (e) => {
        e.preventDefault();


        if (isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is requiered'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email no valido'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Pasword should be at least 6 characteres and match each ot'))
            return false
        }

        dispatch(removeError());
        return true;
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"

            >
                {
                    msgError &&
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password2"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <hr />

                <Link
                    to="/auth/login"
                    className="link mt-5"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
