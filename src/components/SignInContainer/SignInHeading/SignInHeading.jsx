import React from 'react';
import PropTypes from 'prop-types';
import './SignInHeading.css';

const SignInHeading = ({ classIcon, title }) => {
    return (
        <div className="sign-in-heading text-center">
            <i className={classIcon}></i>
            <h1 className="m-2">{title}</h1>
        </div>
    );
};

SignInHeading.propTypes = {
    classIcon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default SignInHeading;
