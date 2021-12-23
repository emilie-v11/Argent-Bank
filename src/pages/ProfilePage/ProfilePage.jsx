import React from 'react';
import Account from '../../components/Account/Account';
import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <main className="main-user">
            <ProfileHeading />
            <section className="accounts">
                <h2 className="sr-only">Accounts</h2>
                <Account
                    id={'checking'}
                    title={'Argent Bank Checking (x8349)'}
                    amount={2082.79}
                    description={'Available Balance'}
                />
                <Account
                    id={'savings'}
                    title={'Argent Bank Savings (x6712)'}
                    amount={10928.42}
                    description={'Available Balance'}
                />
                <Account
                    id={'credit-card'}
                    title={'Argent Bank Credit Card (x8349)'}
                    amount={184.3}
                    description={'Current Balance'}
                />
            </section>
        </main>
    );
};

export default ProfilePage;
