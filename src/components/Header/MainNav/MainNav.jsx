import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/argentBankLogo.png';
import './MainNav.css';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                {/* <button class="sign-in-button">Sign In</button> */}
            </div>
        </nav>
    );
};

export default MainNav;
