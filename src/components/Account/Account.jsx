import React from 'react';
import './Account.css';
import { accountData } from '../../data/mockData';
import AccountItem from './AccountItem/AccountItem';

const Account = () => {
    return (
        <section className="accounts">
            <h2 className="visually-hidden">Accounts</h2>
            {accountData.map(account => (
                <AccountItem
                    key={account.id}
                    id={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </section>
    );
};

export default Account;
