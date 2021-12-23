import React from 'react';
import './SignInContainer.css';
import SignInHeading from './SignInHeading/SignInHeading';
import SignInForm from './SignInForm/SignInForm';

const SignInContainer = () => {
    return (
        <section className="sign-in-container">
            <div className="sign-in-content">
                <SignInHeading classIcon={'fa fa-user-circle'} title={'Sign In'} />
                <SignInForm />
            </div>
        </section>
    );
};

export default SignInContainer;
