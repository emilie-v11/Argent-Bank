// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import Register from './pages/RegisterPage/Register';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';

// import { logout } from './actions/auth';
// import { clearMessage } from './actions/messages';
// import { history } from './helpers/history';

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
