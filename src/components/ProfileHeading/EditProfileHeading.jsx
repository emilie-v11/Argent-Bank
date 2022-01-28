import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UpdateUserInfos } from '../../redux/actions/userProfile';
import { isEmpty, isFormatValid } from '../../helpers/notEmpty';

const EditProfileHeading = ({ firstName, lastName, toggleShowEdition }) => {
    const dispatch = useDispatch();

    const [emptyErrorMessage, setEmptyErrorMessage] = useState(false);
    const [formatErrorMessage, setFormatErrorMessage] = useState(false);

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);

    const handleChangeFirstName = e => {
        if (!isFormatValid(e.target.value)) {
            setFormatErrorMessage(true);
        } else {
            setFormatErrorMessage(false);
            setNewFirstName(e.target.value.trim());
        }
    };

    const handleChangeLastName = e => {
        if (!isFormatValid(e.target.value)) {
            setFormatErrorMessage(true);
        } else {
            setFormatErrorMessage(false);
            setNewLastName(e.target.value);
        }
    };

    const updateUserInfos = e => {
        e.preventDefault();

        const newInfos = {
            firstName: newFirstName,
            lastName: newLastName,
        };

        if (!isEmpty(newFirstName) && !isEmpty(newLastName)) {
            dispatch(UpdateUserInfos(newInfos));
            toggleShowEdition();
        } else {
            setEmptyErrorMessage(true);
        }
        setEmptyErrorMessage(true);
    };

    return (
        <section className="heading text-center">
            <h1 className="greetings pb-2">Welcome back</h1>
            <form className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-column flex-md-row justify-content-center">
                    <div className="form-group m-2">
                        <label className="visually-hidden fw-bold" htmlFor="newFirstName">
                            firstName
                        </label>
                        <input
                            className="py-2 px-2 text-capitalize"
                            type="text"
                            id="newFirstName"
                            name="newFirstName"
                            value={newFirstName}
                            placeholder={firstName}
                            onChange={handleChangeFirstName}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label className="visually-hidden fw-bold" htmlFor="newLastName">
                            lastName
                        </label>
                        <input
                            className="py-2 px-2 text-capitalize"
                            type="text"
                            id="newLastName"
                            name="newLastName"
                            value={newLastName}
                            placeholder={lastName}
                            onChange={handleChangeLastName}
                        />
                    </div>
                </div>
                {emptyErrorMessage && (
                    <span className="text-danger error-message">
                        One or several fields are empty
                    </span>
                )}
                {formatErrorMessage && (
                    <span className="text-danger error-message">
                        Only letters or hyphen (2 to 20 characters max)
                    </span>
                )}
                <div className="d-flex flex-row justify-content-center my-2">
                    <button
                        type="submit"
                        className="btn edit-button save-button px-3 m-2"
                        onClick={updateUserInfos}
                    >
                        Save
                    </button>
                    <button
                        className="btn edit-button cancel-button m-2"
                        onClick={toggleShowEdition}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

EditProfileHeading.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    toggleShowEdition: PropTypes.func.isRequired,
};

export default EditProfileHeading;
