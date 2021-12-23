import React from 'react';
import PropTypes from 'prop-types';
import './Account.css';

const Account = ({ id, title, amount, description }) => {
    return (
        <article id={id} className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </article>
    );
};

Account.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Account;
