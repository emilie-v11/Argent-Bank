import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import Register from './pages/RegisterPage/Register';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Error404 from './pages/Error404/Error404';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from './redux/actions/userProfile';
import Loader from './components/Loader/Loader';
import { getCookie } from './services/useCookies';

function App() {
    const dispatch = useDispatch();
    const isLoaded = useSelector(state => state.authUser.isLoaded);
    const isLoggedIn = useSelector(state => state.authUser.isLoggedIn);

    useEffect(() => {
        // const token = localStorage.getItem('token');
        const token = getCookie('signin-token');
        if (token) {
            dispatch(getUserInfos());
        }
    }, [dispatch]);

    if (!isLoaded && isLoggedIn) {
        return <Loader />;
    }
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
