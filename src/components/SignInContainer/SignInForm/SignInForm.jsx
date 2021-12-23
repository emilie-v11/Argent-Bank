import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignInForm.css';
import SignInFormField from './SignInFormField/SignInFormField';

const SignInForm = () => {
    return (
        <form className="sign-in-form">
            <SignInFormField
                className={'input-wrapper'}
                type={'text'}
                id_HtmlFor={'username'}
                label="Username"
            />
            <SignInFormField
                className={'input-wrapper'}
                type={'password'}
                id_HtmlFor={'password'}
                label={'Password'}
            />

            <SignInFormField
                className={'input-remember'}
                type={'checkbox'}
                id_HtmlFor={'remember-me'}
                label={'Remember me'}
            />
            {/* PLACEHOLDER DUE TO STATIC SITE */}
            <NavLink to="/profile" className="sign-in-button">
                Sign In
            </NavLink>

            {/* SHOULD BE THE BUTTON BELOW */}
            {/* <button className="sign-in-button">Sign In</button> */}
            {/* FIXME change for an input with submit
                <input type="submit" value="Sign In" />
            */}
        </form>
    );
};

export default SignInForm;
