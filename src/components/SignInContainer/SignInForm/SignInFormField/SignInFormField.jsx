import React from 'react';
import PropTypes from 'prop-types';
import './SignInFormField.css';

const SignInFormField = ({ className, type, id_HtmlFor, label }) => {
    return (
        <div className={className}>
            <label htmlFor={id_HtmlFor}>{label}</label>
            <input type={type} id={id_HtmlFor} />
        </div>
    );
};

SignInFormField.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    id_HtmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SignInFormField;
