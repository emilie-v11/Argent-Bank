import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileHeading from '../../components/ProfileHeading/ProfileHeading';
import './ProfilePage.css';
import EditProfileHeading from '../../components/ProfileHeading/EditProfileHeading';
import Accounts from '../../components/Accounts/Accounts';

const ProfilePage = () => {
    const { isLoggedIn } = useSelector(state => state.authUser);
    const currentUser = useSelector(state => state.authUser);

    const [showEditUserInfos, setShowEditUserInfos] = useState(false);

    const toggleShowEdition = () => {
        setShowEditUserInfos(!showEditUserInfos);
    };

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    } else {
        return (
            <main className="main-user">
                {!showEditUserInfos ? (
                    <ProfileHeading
                        firstName={currentUser.firstName}
                        lastName={currentUser.lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                    />
                ) : (
                    <EditProfileHeading
                        firstName={currentUser.firstName}
                        lastName={currentUser.lastName}
                        toggleShowEdition={() => toggleShowEdition()}
                    />
                )}
                <Accounts />
            </main>
        );
    }
};

export default ProfilePage;
