import ChatIcon from '../assets/img/icon-chat.png';
import MoneyIcon from '../assets/img/icon-money.png';
import SecurityIcon from '../assets/img/icon-security.png';

export const accountData = [
    {
        id: 111,
        title: 'Argent Bank Checking (x8349)',
        amount: '2,082.79',
        description: 'Available Balance',
    },
    {
        id: 222,
        title: 'Argent Bank Savings (x6712)',
        amount: '10,928.42',
        description: 'Available Balance',
    },
    {
        id: 333,
        title: 'Argent Bank Credit Card (x8349)',
        amount: '184.30',
        description: 'Current Balance',
    },
];

export const featureData = [
    {
        id: 1,
        imgSrc: ChatIcon,
        alt: 'Chat Icon',
        title: 'You are our #1 priority',
        content:
            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        id: 2,
        imgSrc: MoneyIcon,
        alt: 'Money Icon',
        title: 'More savings means higher rates',
        content: 'The more you save with us, the higher your interest rate will be!',
    },
    {
        id: 3,
        imgSrc: SecurityIcon,
        alt: 'Security Icon',
        title: 'Security you can trust',
        content:
            'We use top of the line encryption to make sure your data and money is always safe.',
    },
];
