import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../../redux/actions/auth';
import SignInHeading from '../../components/SignInContainer/SignInHeading/SignInHeading';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vfirstname = value => {
    if (value.length < 2 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The firstname must be between 2 and 20 characters.
            </div>
        );
    }
};

const vlastname = value => {
    if (value.length < 2 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The lastname must be between 2 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onChangeFirstname = e => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };

    const onChangeLastname = e => {
        const lastname = e.target.value;
        setLastname(lastname);
    };

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = e => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(firstname, lastname, email, password));
            setSuccessful(true);
            setTimeout(() => {
                navigate('/login');
                window.location.reload();
            }, 2000);
        } else {
            setSuccessful(false);
        }
    };

    return (
        <main className="main-signIn">
            <section className="card rounded-0 sign-in-container">
                <div className="sign-in-content">
                    <SignInHeading classIcon={'fa fa-user-circle'} title={'Sign Up'} />

                    <Form className="sign-in-form" onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div>
                                <div className="form-group text-start">
                                    <label className="fw-bold" htmlFor="firstname">
                                        First name
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control text-capitalize"
                                        name="firstname"
                                        value={firstname}
                                        onChange={onChangeFirstname}
                                        validations={[required, vfirstname]}
                                    />
                                </div>

                                <div className="form-group text-start">
                                    <label className="fw-bold" htmlFor="lastname">
                                        Last name
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control text-capitalize"
                                        name="lastname"
                                        value={lastname}
                                        onChange={onChangeLastname}
                                        validations={[required, vlastname]}
                                    />
                                </div>

                                <div className="form-group text-start">
                                    <label className="fw-bold" htmlFor="email">
                                        Email
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control text-lowercase"
                                        name="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        validations={[required, validEmail]}
                                    />
                                </div>

                                <div className="form-group text-start">
                                    <label className="fw-bold" htmlFor="password">
                                        Password
                                    </label>
                                    <Input
                                        type="password"
                                        className="form-control text-lowercase"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="sign-in-button rounded-2">Sign Up</button>
                                </div>
                            </div>
                        )}

                        {message && (
                            <div className="form-group">
                                <div
                                    className={
                                        successful ? 'alert alert-success' : 'alert alert-danger'
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                    </Form>
                </div>
            </section>
        </main>
    );
};

export default Register;
