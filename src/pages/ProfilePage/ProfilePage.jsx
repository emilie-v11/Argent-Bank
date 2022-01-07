import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import UserService from '../../services/user.service';

import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import EditProfileHeading from './EditProfileHeading';
import Accounts from '../../components/Accounts/Accounts';
// import { logout } from '../../actions/auth';

const ProfilePage = () => {
    // const [userInfos, setUserInfos] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [showEditUserName, setShowEditUserName] = useState(false);
    console.log('showEditUserName', showEditUserName);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { isLoggedIn } = useSelector(state => state.auth);
    console.log(isLoggedIn);
    // const dispatch = useDispatch();
    const store = useStore();
    console.log(store);

    useEffect(() => {
        async function getUserData() {
            try {
                const userData = await UserService.getUserBoard();
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
        setShowEditUserName(!showEditUserName);
    };

    // const { firstName, lastName } = userInfos;

    if ((!isLoading && error) || setError === true) {
        return <Error404 />;
    } else if (isLoading) {
        return <Loader />;
        // } else if (isLoggedIn === false) {
        //     return <Navigate to="/" />;
    } else {
        return (
            <main className="main-user">
                {!showEditUserName ? (
                    <ProfileHeading
                        firstName={firstName}
                        lastName={lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                        // showEditUserName={showEditUserName}
                    />
                ) : (
                    <EditProfileHeading
                        firstName={firstName}
                        lastName={lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                    />
                )}
                {/*TODO add props in button = onClick={editUserName}*/}

                <Accounts />
            </main>
        );
    }
};

export default ProfilePage;
