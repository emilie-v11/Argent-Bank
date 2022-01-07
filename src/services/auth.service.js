import axios from 'axios';

export const API_URL = 'http://localhost:3001/api/v1/user/';

class AuthService {
    login(email, password) {
        return axios.post(API_URL + 'login', { email, password }).then(response => {
            console.log(response.data.body.token);
            console.log(response.data);
            if (response.data.body.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
        // localStorage.clear();
    }

    register(firstName, lastName, email, password) {
        return axios.post(API_URL + 'signup', {
            firstName,
            lastName,
            email,
            password,
        });
    }
}

export default new AuthService();

// const register = firstName, lastName, email, password) => {
//     return axios.post(API_URL + 'signup', {
//         firstName, lastName, email, password,
//     });
// };

// const login = (email, password) => {
//     return axios
//         .post(API_URL + 'login', {
//             email,
//             password,
//         })
//         .then(response => {
//             if (response.data.accessToken) {
//                 localStorage.setItem('user', JSON.stringify(response.data));
//             }

//             return response.data;
//         });
// };

// const logout = () => {
//     localStorage.removeItem('user');
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     register,
//     login,
//     logout,
// };
