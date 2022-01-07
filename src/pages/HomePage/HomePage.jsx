// import React, { useState, useEffect } from 'react';
// import UserService from '../../services/user.service';
import './HomePage.css';
import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
    // const [content, setContent] = useState('');

    // useEffect(() => {
    //     UserService.getPublicContent().then(
    //         response => {
    //             setContent(response.data);
    //         },
    //         error => {
    //             const _content =
    //                 (error.response && error.response.data) || error.message || error.toString();

    //             setContent(_content);
    //         }
    //     );
    // }, []);

    return (
        <main className="main-homepage">
            <Hero />
            <Features />
        </main>
    );
};

export default HomePage;
