import React from 'react';
import './Features.css';
import FeatureItem from '../../components/Features/FeatureItem/FeatureItem';
import ChatIcon from '../../assets/img/icon-chat.png';
import MoneyIcon from '../../assets/img/icon-money.png';
import SecurityIcon from '../../assets/img/icon-security.png';

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
                imgSrc={ChatIcon}
                alt="Chat Icon"
                title="You are our #1 priority"
                content="Need to talk to a representative? You can get in touch through our 24/7 chat
                        or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                imgSrc={MoneyIcon}
                alt="Money Icon"
                title="More savings means higher rates"
                content="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                imgSrc={SecurityIcon}
                alt="Security Icon"
                title="Security you can trust"
                content="We use top of the line encryption to make sure your data and money is always
                        safe."
            />
        </section>
    );
};

export default Features;
