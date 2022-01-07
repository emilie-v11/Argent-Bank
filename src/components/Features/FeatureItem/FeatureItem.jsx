import React from 'react';
import PropTypes from 'prop-types';
import './FeatureItem.css';

const FeatureItem = ({ id, imgSrc, alt, title, content }) => {
    return (
        <article id={id} className="feature-item">
            <img src={imgSrc} alt={alt} className="feature-item-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
        </article>
    );
};

FeatureItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default FeatureItem;
