import { API_URL } from './auth.service';

export default function authHeader() {
    // TODO cf => backend : server / middleware / tokenValidation
    // FIXME
    // BUG
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.body.token;

    console.log(user.body.token);
    console.log(user);
    if (user && user.body.token) {
        // return { Authorization: 'Bearer ' + user.body.token };
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

// // export const getToken = async logInDetails => {
// export const authHeader = async logInDetails => {
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     var raw = JSON.stringify(logInDetails);
//     console.log(raw);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow',
//     };

//     console.log(requestOptions);
//     const response = await fetch(`${API_URL}/user/login`, requestOptions);
//     const tokenResult = await response.json().catch(error => console.log('error', error));

//     return tokenResult.body.token;
// };
