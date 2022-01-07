import React from 'react';
import './Features.css';
import FeatureItem from '../../components/Features/FeatureItem/FeatureItem';
// import ChatIcon from '../../assets/img/icon-chat.png';
// import MoneyIcon from '../../assets/img/icon-money.png';
// import SecurityIcon from '../../assets/img/icon-security.png';
import { featureData } from '../../data/mockData';

// TODO make mock
const Features = () => {
    return (
        <section className="features">
            <h2 className="visually-hidden">Features</h2>
            {featureData.map(feature => (
                <FeatureItem
                    key={feature.id}
                    id={feature.id}
                    imgSrc={feature.imgSrc}
                    alt={feature.alt}
                    title={feature.title}
                    content={feature.content}
                />
            ))}
        </section>
    );
};

export default Features;
