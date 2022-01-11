import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
// import { useSelector, useStore } from 'react-redux';
import UserService from '../../services/user.service';

import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import EditProfileHeading from '../../components/ProfileHeading/EditProfileHeading';
import Accounts from '../../components/Accounts/Accounts';
// import { logout } from '../../actions/auth';

const ProfilePage = () => {
    // const [userInfos, setUserInfos] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    console.log('firstName', firstName);
    console.log('lastName', lastName);

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    console.log('newFirstName', newFirstName, 'newLastName', newLastName);

    const [showEditUserInfos, setShowEditUserInfos] = useState(false);
    console.log('showEditUserInfos', showEditUserInfos);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    // const { user } = useSelector(state => state.user);
    console.log(isLoggedIn);
    const dispatch = useDispatch();
    const store = useStore();
    // console.log(store);

    useEffect(() => {
        async function getUserData() {
            try {
                const userData = await UserService.getUserProfile();
                setFirstName(userData.data.body.firstName);
                setLastName(userData.data.body.lastName);

                console.log(userData.data.body);
                console.log(userData);
            } catch (error) {
                console.error('Error: userData', error);
                error.message || error.toString();
                setError(true);
            }
            setIsLoading(false);
        }
        getUserData();
    }, []);

    const toggleShowEdition = () => {
        if (newFirstName.length !== 0 || newLastName.length !== 0) {
            setNewFirstName(firstName);
            setNewLastName(lastName);
        }
        setShowEditUserInfos(!showEditUserInfos);
    };

    const handleChangeFirstName = e => {
        if (e.target.value === 0) {
            setNewFirstName(firstName);
        } else {
            setNewFirstName(e.target.value);
        }
    };

    const handleChangeLastName = e => {
        if (e.target.value === 0) {
            setNewLastName(lastName);
        } else {
            setNewLastName(e.target.value);
        }
    };

    const handleEditSubmit = e => {
        e.preventDefault();

        if (
            (newFirstName.length === 0 && newLastName.length === 0) ||
            (newFirstName === firstName && newLastName === lastName)
        ) {
            // setFirstName(firstName);
            // setLastName(lastName);
            return message;
        } else {
            if (newFirstName.length === 0) {
                setFirstName(firstName);
            } else {
                setFirstName(newFirstName);
            }

            if (newLastName.length === 0) {
                setLastName(lastName);
            } else {
                setLastName(newLastName);
            }
            setShowEditUserInfos(!showEditUserInfos);
        }
    };

    if ((!isLoading && error) || setError === true) {
        return <Error404 />;
    } else if (isLoading) {
        return <Loader />;
        // } else if (isLoggedIn === false) {
        //     return <Navigate to="/" />;
    } else {
        return (
            <main className="main-user">
                {!showEditUserInfos ? (
                    <ProfileHeading
                        firstName={firstName}
                        lastName={lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                    />
                ) : (
                    <EditProfileHeading
                        firstName={firstName}
                        lastName={lastName}
                        newFirstName={newFirstName}
                        newLastName={newLastName}
                        toggleShowEdition={() => toggleShowEdition()}
                        handleEditSubmit={handleEditSubmit}
                        handleChangeFirstName={handleChangeFirstName}
                        handleChangeLastName={handleChangeLastName}
                    />
                )}

                <Accounts />
            </main>
        );
    }
};

export default ProfilePage;
