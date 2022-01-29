import axios from 'axios';
import { API_URL } from './API-URL';
import { deleteCookie, getCookie, setCookie } from './useCookies';

class AuthService {
    register(firstName, lastName, email, password) {
        return axios.post(API_URL + '/signup', {
            firstName,
            lastName,
            email,
            password,
        });
    }

    async login(email, password) {
        const response = await axios.post(API_URL + '/login', { email, password });
        const token = response.data.body.token;
        if (token) {
            setCookie('signin-token', token, 1);
        }
        return response.data;
    }

    logout() {
        const signTok = getCookie('signin-token');
        deleteCookie('signin-token', signTok);
    }
}

export default new AuthService();
