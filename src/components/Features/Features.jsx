import React from 'react';
import './Features.css';
import FeatureItem from '../../components/Features/FeatureItem/FeatureItem';
import { featureData } from '../../assets/data/mockData';

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
