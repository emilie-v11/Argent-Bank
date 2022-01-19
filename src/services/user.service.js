import axios from 'axios';
// import MainNav from '../components/Header/MainNav/MainNav';
import authHeader from './auth-header';
import { API_URL } from './auth.service';

// const API_URL = 'http://localhost:3001/api/v1/user/';
// const API_URL = 'http://localhost:3001/api/v1';

export const fetchUserData = async (token, endpoint) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    // const headers = {
    //     Authorization: `Bearer ${token}`,
    // };
    console.log(myHeaders);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow', // enlever
    };

    const userDataRequest = await fetch(`${API_URL}/user/${endpoint}`, requestOptions);
    const userDataResult = await userDataRequest.json().catch(error => console.log('error', error));
    console.log(userDataResult.body);

    return userDataResult.body;
};

class UserService {
    getUserProfile() {
        // console.log({headers: { ...authHeader() }});
        return axios.post(API_URL + '/user/profile', {}, { headers: { ...authHeader() } });
        // .then(response => {
        // if (response.data.body.token) {
        //     console.log(response.data);
        // }
        // });
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
            .put(API_URL + '/user/profile', {
                firstName,
                lastName,
            })
            .then(response => {
                if (response.data.body.token) {
                    // localStorage.setItem('firstName', JSON.stringify(response.data));
                    // localStorage.setItem('lastName', JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

// export default new UserService();

// export const getUserProfileInfos = async () => {
//     try {

//     } catch (error) {

//     }
//     return axios.post(API_URL + 'user', { headers: authHeader() });
// };
