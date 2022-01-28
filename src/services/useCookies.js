export const setCookie = (cookieNm, cookieVal, cookieExpDays) => {
    let date = new Date();
    date.setTime(date.getTime() + cookieExpDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cookieNm + '=' + cookieVal + '; ' + expires + '; path=/';
};

export const getCookie = cookieNm => {
    const name = cookieNm + '=';
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
};

export const deleteCookie = (cookieNm, cookieVal) => {
    const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = cookieNm + '=' + cookieVal + '; ' + expires + '; path=/';
};
