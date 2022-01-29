import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Logo from '../../../assets/img/argentBankLogo.png';
import Logo from '../../../assets/img/argentBankLogo.webp';
import './MainNav.css';
import { logout } from '../../../redux/actions/auth';

const MainNav = () => {
    const { isLoggedIn } = useSelector(state => state.authUser);
    const currentUser = useSelector(state => state.authUser);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logout());
    };

    const navIsLoggedIn = (
        <div className="main-nav-items">
            <NavLink className="main-nav-item mx-md-5" to="/profile">
                <i className="fa fa-user-circle"></i>
                <span className="text-capitalize">{currentUser.firstName}</span>
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign out
            </NavLink>
        </div>
    );

    const navIsNotLoggedIn = (
        <div className="main-nav-items">
            <NavLink className="main-nav-item mx-md-5" to="/login">
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
            {!isLoggedIn ? navIsNotLoggedIn : navIsLoggedIn}
        </nav>
    );
};

export default MainNav;
