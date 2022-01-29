import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

import { getUserInfos } from './redux/actions/userProfile';
import { getCookie } from './services/useCookies';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage'));
const Register = lazy(() => import('./pages/RegisterPage/Register'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const Error404 = lazy(() => import('./pages/Error404/Error404'));

const renderLoader = () => <Loader />;

function App() {
    const dispatch = useDispatch();
    const isLoaded = useSelector(state => state.authUser.isLoaded);
    const isLoggedIn = useSelector(state => state.authUser.isLoggedIn);

    useEffect(() => {
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
            <Suspense fallback={renderLoader()}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
