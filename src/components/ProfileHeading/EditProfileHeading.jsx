import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const EditProfileHeading = ({
    firstName,
    lastName,
    newFirstName,
    newLastName,
    toggleShowEdition,
    handleEditSubmit,
    handleChangeFirstName,
    handleChangeLastName,
    emptyErrorMessage,
    formatErrorMessage,
}) => {
    const form = useRef();

    return (
        <section className="heading text-center">
            <h1 className="greetings pb-2">Welcome back</h1>
            <Form
                className="d-flex flex-column justify-content-center"
                onSubmit={handleEditSubmit}
                ref={form}
            >
                <div className="d-flex flex-column flex-md-row justify-content-center">
                    <div className="form-group m-2">
                        <label className="visually-hidden fw-bold" htmlFor="newFirstName">
                            firstName
                        </label>
                        <Input
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
                        <Input
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
                        No changes have been made. <br />
                        Cancel or make a change before saving.
                    </span>
                )}
                {formatErrorMessage && (
                    <span className="text-danger error-message">
                        Only letters or hyphen (2 to 20 characters max)
                        {/* or hyphen with the compound name. */}
                        {/* Character format error, please use only letters. */}
                    </span>
                )}
                <div className="d-flex flex-row justify-content-center my-2">
                    <button type="submit" className="btn edit-button save-button px-3 m-2">
                        Save
                    </button>
                    <button
                        className="btn edit-button cancel-button m-2"
                        onClick={toggleShowEdition}
                    >
                        Cancel
                    </button>
                </div>
            </Form>
        </section>
    );
};

EditProfileHeading.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    newFirstName: PropTypes.string.isRequired,
    newLastName: PropTypes.string.isRequired,
    toggleShowEdition: PropTypes.func.isRequired,
    handleEditSubmit: PropTypes.func.isRequired,
    handleChangeFirstName: PropTypes.func.isRequired,
    handleChangeLastName: PropTypes.func.isRequired,
};

export default EditProfileHeading;
