import React from 'react';
import PropTypes from 'prop-types';
import './SignInFormField.css';

const SignInFormField = ({ className, type, id_HtmlFor, label, onChange, validations }) => {
    return (
        <div className={className}>
            <label htmlFor={id_HtmlFor}>{label}</label>
            <input type={type} id={id_HtmlFor} onChange={onChange} validations={validations} />
        </div>
    );
};

SignInFormField.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    id_HtmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    validations: PropTypes.func,
};

export default SignInFormField;
