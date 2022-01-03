import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserService from '../../services/user.service';
import Account from '../../components/Account/Account';
import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';

const ProfilePage = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getUserBoard().then(
            response => {
                setContent(response.data);
                console.log(response.data);
            },
            error => {
                const _content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <main className="main-user">
            {/* <ProfileHeading /> */}
            <section className="heading text-center">
                <h1 className="greetings">
                    Welcome back
                    <br />
                    {'Tony'} {'Jarvis'}!
                </h1>
                <button className=" btn edit-button">Edit Name</button>
            </section>

            <section className="accounts">
                <h2 className="visually-hidden">Accounts</h2>
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
