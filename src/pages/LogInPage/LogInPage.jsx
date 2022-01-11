import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../actions/auth';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

import SignInHeading from '../../components/SignInContainer/SignInHeading/SignInHeading';
import './LogInPage.css';
import '../../components/SignInContainer/SignInForm/SignInForm.css';

const required = value => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
};

// const required = value => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This field is required!
//             </div>
//         );
//     }
// };

const email = value => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
};

const LogInPage = props => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    // TODO add function for remember me - save username/email
    const onChangeRememberMe = e => {
        const rememberMe = e.currentTarget.checked;
        // console.log(rememberMe);
        setRememberMe(rememberMe);
    };

    const handleSubmit = e => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    props.history.push('/profile');
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }

    return (
        <main className="main-signIn">
            <section className="card rounded-0 sign-in-container">
                <div className="sign-in-content">
                    <SignInHeading classIcon={'fa fa-user-circle'} title={'Sign In'} />

                    <Form className="sign-in-form" onSubmit={handleSubmit} ref={form}>
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="username">
                                Username
                            </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, email]}
                            />
                        </div>

                        <div className="form-group">
                            <label className="fw-bold" htmlFor="password">
                                Password
                            </label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-check mt-2">
                            <Input
                                className="form-check-input"
                                type="checkbox"
                                value={rememberMe}
                                checked={rememberMe}
                                id="remember-me"
                                onChange={onChangeRememberMe}
                            />
                            <label className="form-check-label m-0" htmlFor="remember-me">
                                remember me
                            </label>
                        </div>

                        <div className="form-group">
                            <button className="sign-in-button rounded-2" disabled={loading}>
                                {loading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                    <span>Sign In</span>
                                )}
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
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

export default LogInPage;
