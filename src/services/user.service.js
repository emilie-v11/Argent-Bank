import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from './auth.service';

// const API_URL = 'http://localhost:3001/api/v1/user/';

class UserService {
    // getPublicContent() {
    //     return axios.get(API_URL + 'all');
    // }

    getUserBoard() {
        console.log({headers: { ...authHeader() }});
        return axios.post(API_URL + 'profile', {}, { headers: { ...authHeader() } });
        // return axios({
        //     method: 'post',
        //     url: `${API_URL}profile`,
        //     headers: { ...authHeader() },
        //     // data: data.data.body,
        // });
    }

    // getModeratorBoard() {
    //     return axios.get(API_URL + 'mod', { headers: authHeader() });
    // }

    // getAdminBoard() {
    //     return axios.get(API_URL + 'admin', { headers: authHeader() });
    // }
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
