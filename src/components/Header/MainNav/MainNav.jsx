import React from 'react';
// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/argentBankLogo.png';
import './MainNav.css';
import { logout } from '../../../actions/auth';

const MainNav = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    // const { firstName } = useSelector(state => state.user);
    // const { message } = useSelector(state => state.message);
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logout());
    };

    const navIsLoggedIn = (
        <div className="main-nav-items">
            <NavLink className="main-nav-item mx-md-5" to="/profile">
                <i className="fa fa-user-circle"></i>
                {'firstName'}
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign out
            </NavLink>
        </div>
    );

    const navNotLoggedIn = (
        <div className="main-nav-items">
            <NavLink className="main-nav-item mx-md-5" to="/login">
                {/* <i className="fa fa-user-circle"></i> */}
                Sign In
            </NavLink>
            <NavLink className="main-nav-item" to="/signup">
                Sign Up
            </NavLink>
        </div>
    );

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="visually-hidden">Argent Bank</h1>
            </NavLink>
            {!isLoggedIn ? navNotLoggedIn : navIsLoggedIn}
            {/* {!isLoggedIn ? (
                <div className="main-nav-items">
                    <NavLink className="main-nav-item mx-md-5" to="/login">
                        Sign In
                    </NavLink>
                    <NavLink className="main-nav-item" to="/signup">
                        Sign Up
                    </NavLink>
                </div>
            ) : (
                <div className="main-nav-items">
                    <NavLink className="main-nav-item mx-md-5" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {'firstName'}
                    </NavLink>
                    <NavLink className="main-nav-item" to="/" onClick={signOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign out
                    </NavLink>
                </div>
            )} */}
        </nav>
    );
};

export default MainNav;
