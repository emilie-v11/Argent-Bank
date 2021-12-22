import React from 'react';
import { NavLink } from 'react-router-dom';

const LogInPage = () => {
    return (
        <main className="main main-signIn bg-dark">
            <section className="sign-in-container">
                <div className="sign-in-content">
                    {/* <i className="fa fa-user sign-in-icon"></i> */}
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <label htmlFor="remember-me">Remember me</label>
                            <input type="checkbox" id="remember-me" />
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {/* FIXME change for an input with submit
                            <input type="submit" value="Sign In" />
                        */}
                        <NavLink to="/user" className="sign-in-button">
                            Sign In
                        </NavLink>
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/* <button className="sign-in-button">Sign In</button> */}
                    </form>
                </div>
            </section>
        </main>
    );
};

export default LogInPage;
