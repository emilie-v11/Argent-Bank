import axios from 'axios';
import MainNav from '../components/Header/MainNav/MainNav';
import authHeader from './auth-header';
import { API_URL } from './auth.service';

// const API_URL = 'http://localhost:3001/api/v1/user/';

class UserService {
    // getUserBoard
    getUserProfile() {
        // console.log({headers: { ...authHeader() }});
        // console.log();
        return axios.post(API_URL + 'profile', {}, { headers: { ...authHeader() } });
        // return axios({
        //     method: 'post',
        //     url: `${API_URL}profile`,
        //     headers: { ...authHeader() },
        //     // data: data.data.body,
        // });
    }

    // FIXME BUG  'editeditUserInfos' => 'updateUserProfile'
    updateUserProfile(firstName, lastName) {
        return axios
            .put(API_URL + 'profile', {
                firstName,
                lastName,
            })
            .then(response => {
                if (response.data.body.token) {
                    localStorage.setItem('firstName', JSON.stringify(response.data));
                    localStorage.setItem('lastName', JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export default new UserService();

// const getPublicContent = () => {
//     return axios.get(API_URL + 'all');
// };

// const getUserInfos = () => {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
// };

// const getAdminBoard = () => {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
// };

// export { getPublicContent, getUserInfos, getModeratorBoard, getAdminBoard };
