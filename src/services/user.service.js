import axios from 'axios';
import { API_URL } from './API-URL';
import authHeader from './auth-header';

class UserService {
    async getUserProfile() {
        try {
            const response = await axios({
                method: 'post',
                url: API_URL + '/profile',
                headers: { ...authHeader() },
            });
            console.log(response.body);
            return response.data;
        } catch (error) {
            console.log('error getUserProfile', error);
        }
    }

    async updateUserProfile(data) {
        try {
            const response = await axios({
                method: 'put',
                url: API_URL + '/profile',
                data: { ...data },
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (error) {
            console.log('error updateUserProfile', error);
        }
    }
}

export default new UserService();
