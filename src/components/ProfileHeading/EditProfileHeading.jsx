import React from 'react';
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
}) => {
    return (
        <section className="heading text-center">
            <h1 className="greetings pb-2">Welcome back</h1>
            <Form className="d-flex flex-column justify-content-center" onSubmit={handleEditSubmit}>
                <div className="d-flex flex-row justify-content-center">
                    <div className="form-group mx-2">
                        <label className="visually-hidden fw-bold" htmlFor="newFirstName">
                            firstName
                        </label>
                        <Input
                            className="py-2 px-2"
                            type="text"
                            id="newFirstName"
                            name="newFirstName"
                            value={newFirstName}
                            placeholder={firstName}
                            onChange={handleChangeFirstName}
                        />
                    </div>
                    <div className="form-group mx-2">
                        <label className="visually-hidden fw-bold" htmlFor="newLastName">
                            lastName
                        </label>
                        <Input
                            className="py-2 px-2"
                            type="text"
                            id="newLastName"
                            name="newLastName"
                            value={newLastName}
                            placeholder={lastName}
                            onChange={handleChangeLastName}
                        />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center my-2">
                    {/*TODO add props in button = onClick={editUserName}*/}
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
