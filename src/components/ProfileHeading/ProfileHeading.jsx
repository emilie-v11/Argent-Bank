import React from 'react';
import PropTypes from 'prop-types';
import './ProfileHeading.css';

const ProfileHeading = ({ firstName, lastName, toggleShowEdition }) => {
    return (
        <section className="heading text-center">
            <h1 className="greetings">
                Welcome back
                <br />
                {firstName} {lastName}!
            </h1>
            <button className=" btn edit-button" onClick={toggleShowEdition}>
                Edit Name
            </button>
        </section>
    );
};

ProfileHeading.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default ProfileHeading;
