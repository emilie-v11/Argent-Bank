import React from 'react';
import './SignInForm.css';
import SignInFormField from '../SignInFormField/SignInFormField';

const SignInForm = ({ onSubmit, onChange, validations, checked, value }) => {
    return (
        <form className="sign-in-form" onSubmit={onSubmit}>
            <SignInFormField
                className={'input-wrapper'}
                type={'text'}
                id_HtmlFor={'username'}
                label="Username"
                onChange={onChange}
                validations={validations}
            />
            <SignInFormField
                className={'input-wrapper'}
                type={'password'}
                id_HtmlFor={'password'}
                label={'Password'}
                onChange={onChange}
                validations={validations}
            />

            <SignInFormField
                className={'input-remember'}
                type={'checkbox'}
                id_HtmlFor={'remember-me'}
                label={'Remember me'}
                checked={checked}
                value={value}
                onChange={onChange}
            />
            {/* PLACEHOLDER DUE TO STATIC SITE */}
            {/* <NavLink to="/profile" className="sign-in-button">
                Sign In
            </NavLink> */}

            <button className="sign-in-button">Sign In</button>

            {/* SHOULD BE THE BUTTON BELOW */}
            {/* <button className="sign-in-button">Sign In</button> */}
            {/* FIXME change for an input with submit
                <input type="submit" value="Sign In" />
            */}
        </form>
    );
};

export default SignInForm;
