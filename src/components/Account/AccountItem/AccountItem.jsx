import React from 'react';
import PropTypes from 'prop-types';
// import './Account.css';

const AccountItem = ({ id, title, amount, description }) => {
    return (
        <article id={id} className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <button className="btn transaction-button">View transactions</button>
        </article>
    );
};

AccountItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AccountItem;
