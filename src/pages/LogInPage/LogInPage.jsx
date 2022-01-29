import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/actions/auth';

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

    const [isLoading, setIsLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.authUser);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        const memoUserEmail = localStorage.getItem('memo-useremail');
        const memoUserPassword = localStorage.getItem('memo-userpassword');

        if ((memoUserEmail && memoUserPassword) !== null) {
            setUsername(memoUserEmail);
            setPassword(memoUserPassword);
            setRememberMe(true);
        } else {
            setUsername('');
            setPassword('');
            setRememberMe(false);
        }
    }, []);

    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeRememberMe = e => {
        const rememberMe = e.currentTarget.checked;
        setRememberMe(rememberMe);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        let is_mounted = true;
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0 && is_mounted) {
            dispatch(login(username, password, rememberMe))
                .then(() => {
                    window.location.reload();
                    return <Navigate to="/profile" />;
                })
                .catch(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
        return function cleanup() {
            is_mounted = false;
        };
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
                                className="form-control text-lowercase"
                                id="username"
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
                                id="password"
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
                                name="rememberMe"
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
                            <button className="sign-in-button rounded-2" disabled={isLoading}>
                                {isLoading ? (
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
