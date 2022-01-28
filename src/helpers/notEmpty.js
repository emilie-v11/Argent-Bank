export const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export const isFormatValid = value => {
    const nameRegExp = /^([A-ZÀ-Ÿa-z-']{0,20})$/;
    return nameRegExp.test(value);
};
