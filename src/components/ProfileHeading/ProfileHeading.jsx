import React from 'react';
// import PropTypes from 'prop-types';
import './ProfileHeading.css';

const ProfileHeading = () => {
    return (
        <section className="heading">
            <h1 className="greetings">
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button  className=" btn edit-button">Edit Name</button>
        </section>
    );
};

// ProfileHeading.propTypes = {};

export default ProfileHeading;
