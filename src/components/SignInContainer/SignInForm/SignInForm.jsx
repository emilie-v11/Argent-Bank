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
            <button className="sign-in-button">Sign In</button>
        </form>
    );
};

export default SignInForm;
