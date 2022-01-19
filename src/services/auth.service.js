import axios from 'axios';

export const API_URL = 'http://localhost:3001/api/v1';

class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/user/login', { email, password })
            .then(response => {
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
        return axios.post(API_URL + '/user/signup', {
            firstName,
            lastName,
            email,
            password,
        });
    }
}

export default new AuthService();
