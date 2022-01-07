import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import Register from './pages/RegisterPage/Register';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';

import { logout } from './actions/auth';
import { clearMessage } from './actions/messages';
import { history } from './helpers/history';

// import store from './store';

function App() {
    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    // const [showAdminBoard, setShowAdminBoard] = useState(false);

    // const { user: currentUser } = useSelector(state => state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     history.listen(location => {
    //         dispatch(clearMessage()); // clear message when changing location
    //     });
    // }, [dispatch]);

    // useEffect(() => {
    //     if (currentUser) {
    //         setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
    //         setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    //     }
    // }, [currentUser]);

    // const logOut = () => {
    //     dispatch(logout());
    // };

    return (
        <BrowserRouter>
            {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
                <NavLink to={'/'} className="navbar-brand">
                    bezKoder
                </NavLink>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link">
                            Home
                        </NavLink>
                    </li>

                    {currentUser && (
                        <li className="nav-item">
                            <NavLink to={'/user'} className="nav-link">
                                User
                            </NavLink>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to={'/profile'} className="nav-link">
                                {currentUser.username}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to={'/login'} className="nav-link">
                                Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={'/signup'} className="nav-link">
                                Sign Up
                            </NavLink>
                        </li>
                    </div>
                )}
            </nav> */}
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

/* <Provider store={store}> </Provider>*/
