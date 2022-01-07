import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const EditProfileHeading = ({firstName, lastName, toggleShowEdition}) => {
    return (
        <section className="heading text-center">
            <h1 className="greetings pb-2">Welcome back</h1>
            <Form className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-row justify-content-center">
                    <div className="form-group mx-2">
                        <label className="visually-hidden fw-bold" htmlFor="username">
                            firstName
                        </label>
                        <Input
                            className="py-2 px-2"
                            type="text"
                            id="firstname"
                            name="firstName"
                            value={firstName}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mx-2">
                        <label className="visually-hidden fw-bold" htmlFor="username">
                            lastName
                        </label>
                        <Input
                            className="py-2 px-2"
                            type="text"
                            id="lastname"
                            name="lastName"
                            value={lastName}
                            // onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center my-2">
                    {/*TODO add props in button = onClick={editUserName}*/}
                    <button className="btn edit-button save-button px-3 m-2">Save</button>
                    <button className="btn edit-button cancel-button m-2" onClick={toggleShowEdition}>
                        Cancel
                    </button>
                </div>
            </Form>
        </section>
    );
};

EditProfileHeading.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default EditProfileHeading;
