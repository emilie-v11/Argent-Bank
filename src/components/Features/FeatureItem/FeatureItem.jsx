import React from 'react';
import PropTypes from 'prop-types';
import './FeatureItem.css';

const FeatureItem = ({ imgSrc, alt, title, content }) => {
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={alt} className="feature-item-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default FeatureItem;
