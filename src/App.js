import { Route, Routes } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import UserPage from './pages/UserPage/UserPage';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
