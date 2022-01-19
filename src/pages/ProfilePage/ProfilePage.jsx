import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector, useStore } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import UserService from '../../services/user.service';

import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import EditProfileHeading from '../../components/ProfileHeading/EditProfileHeading';
import Accounts from '../../components/Accounts/Accounts';
// import { logout } from '../../actions/auth';

const ProfilePage = () => {
    // // const [userInfos, setUserInfos] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // console.log('firstName', firstName);
    // console.log('lastName', lastName);
    const user = useSelector(state => state.user);
    console.log(user);

    // const [newFirstName, setNewFirstName] = useState(firstName);
    // const [newLastName, setNewLastName] = useState(lastName);
    // console.log('newFirstName', newFirstName, 'newLastName', newLastName);

    // const [emptyErrorMessage, setEmptyErrorMessage] = useState(false);
    // const [formatErrorMessage, setFormatErrorMessage] = useState(false);

    const [showEditUserInfos, setShowEditUserInfos] = useState(false);
    console.log('showEditUserInfos', showEditUserInfos);

    // TODO FIXME rechanger le 'isLoading a true par défaut
    // const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { isLoggedIn } = useSelector(state => state.auth);
    // const { message } = useSelector(state => state.message);
    const { currentUser } = useSelector(state => state.userReducer);
    console.log(currentUser);
    console.log(isLoggedIn);
    const dispatch = useDispatch();
    // const store = useStore();
    // console.log(store);

    useEffect(() => {
        // async function getUserData() {
        //     try {
        //         const userData = await UserService.getUserProfile();
        //         setFirstName(userData.data.body.firstName);
        //         setLastName(userData.data.body.lastName);
        //         console.log(userData.data.body);
        //         console.log(userData);
        //     } catch (error) {
        //         console.error('Error: userData', error);
        //         error.message || error.toString();
        //         setError(true);
        //     }
        //     setIsLoading(false);
        // }
        // getUserData();
    }, []);

    const toggleShowEdition = () => {
        // setNewFirstName(firstName);
        // setNewLastName(lastName);
        // setEmptyErrorMessage(false);
        // setFormatErrorMessage(false);
        setShowEditUserInfos(!showEditUserInfos);
    };

    // const handleChangeFirstName = e => {
    //     setEmptyErrorMessage(false);
    //     if (e.target.value.trim() === 0) {
    //         setNewFirstName(firstName);
    //     } else {
    //         setNewFirstName(e.target.value);
    //     }
    // };

    // const handleChangeLastName = e => {
    //     setEmptyErrorMessage(false);
    //     if (e.target.value.trim() === '') {
    //         setNewLastName(lastName);
    //     } else {
    //         setNewLastName(e.target.value);
    //     }
    // };

    // /**
    //  * REGEX
    //  */
    // // Regex for firstName & lastName.
    // // Regex rules allow: Capital, lowercase and accent's letters, hyphen, apostrophe.
    // // & prohibit : numbers, specials characteres, spaces.
    // const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;
    // const isFormatValid = e => nameRegExp.test(e.target.value);
    // // function unifiedCase(str) {
    // //     return str.trim().charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // // }
    // const isEmptyInput = e => e.target.value.trim() === ''; // Empty input
    // const isSameFirstName = newFirstName.trim() === firstName; // Same value
    // const isSameLastName = newLastName.trim() === lastName; // Same value

    // const handleChangeFirstName = e => {
    //     if (!isEmptyInput(e)) {
    //         setEmptyErrorMessage(false);
    //         // setNewFirstName(unifiedCase(e.target.value));
    //         setNewFirstName(e.target.value.trim());
    //     }
    //     if (!isFormatValid(e)) {
    //         setFormatErrorMessage(true);
    //     } else {
    //         setFormatErrorMessage(false);
    //         // setNewFirstName(unifiedCase(e.target.value));
    //         setNewFirstName(e.target.value.trim());
    //     }
    // };

    // const handleChangeLastName = e => {
    //     if (!isEmptyInput(e)) {
    //         setEmptyErrorMessage(false);
    //         // setNewLastName(unifiedCase(e.target.value));
    //         setNewLastName(e.target.value);
    //     }
    //     if (!isFormatValid(e)) {
    //         setFormatErrorMessage(true);
    //     } else {
    //         setFormatErrorMessage(false);
    //         // setNewLastName(unifiedCase(e.target.value));
    //         setNewLastName(e.target.value);
    //     }
    // };

    // const handleEditSubmit = e => {
    //     e.preventDefault();
    //     if (isSameFirstName && isSameLastName) {
    //         return setEmptyErrorMessage(true);
    //     } else if (formatErrorMessage) { // FIXME
    //         return setFormatErrorMessage(true);
    //     } else {
    //         if (!isSameFirstName) {
    //             setFirstName(newFirstName);
    //         } else {
    //             setFirstName(firstName);
    //         }
    //         if (!isSameLastName) {
    //             setLastName(newLastName);
    //         } else {
    //             setLastName(lastName);
    //         }
    //         setShowEditUserInfos(!showEditUserInfos);
    //         setEmptyErrorMessage(false);
    //         setFormatErrorMessage(false);
    //     }
    // };

    if ((!isLoading && error) || setError === true) {
        return <Error404 />;
    } else if (isLoading) {
        return <Loader />;
    } else {
        return (
            <main className="main-user">
                {!showEditUserInfos ? (
                    <ProfileHeading
                        // firstName={firstName}
                        // lastName={lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                    />
                ) : (
                    <EditProfileHeading
                        // firstName={firstName}
                        // lastName={lastName}
                        // newFirstName={newFirstName}
                        // newLastName={newLastName}
                        toggleShowEdition={() => toggleShowEdition()}
                        // handleEditSubmit={handleEditSubmit}
                        // handleChangeFirstName={handleChangeFirstName}
                        // handleChangeLastName={handleChangeLastName}
                        // emptyErrorMessage={emptyErrorMessage}
                        // formatErrorMessage={formatErrorMessage}
                    />
                )}

                <Accounts />
            </main>
        );
    }
};

export default ProfilePage;
