import UserService from '../../services/user.service';
import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_FAIL,
    GET_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
} from './types';

// export const getUserInfos = () => {
//     return async dispatch => {
//         // const token = getCookie('signin-token');
//         try {
//             const response = await axios({
//                 method: 'post',
//                 url: API_URL + '/profile',
//                 headers: { ...authHeader() },
//             });

//             dispatch({
//                 type: GET_USER_PROFILE,
//             });

//             dispatch({
//                 type: GET_USER_PROFILE_SUCCESS,
//                 payload: response.data.body,
//             });
//         } catch (error) {
//             dispatch({
//                 type: GET_USER_PROFILE_FAIL,
//             });
//             console.log("Fail get user's profile", error);
//         }
//     };
// };

export const getUserInfos = () => dispatch => {
    return UserService.getUserProfile().then(
        response => {
            dispatch({
                type: GET_USER_PROFILE,
            });

            dispatch({
                type: GET_USER_PROFILE_SUCCESS,
                payload: response.body,
            });
            return Promise.resolve();
        },
        error => {
            dispatch({
                type: GET_USER_PROFILE_FAIL,
            });
            console.log("Fail get user's profile", error);
        }
    );
};

export const UpdateUserInfos = data => dispatch => {
    return UserService.updateUserProfile(data).then(
        response => {
            console.log(data);
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: { ...data },
            });
            return Promise.resolve();
        },
        error => {
            dispatch({
                type: UPDATE_USER_PROFILE_FAIL,
            });
            console.log("Fail update user's profile", error);
        }
    );
};

// export const UpdateUserInfos = data => {
//     return async dispatch => {
//         try {
//             // const response = await axios({
//             //     method: 'put',
//             //     url: API_URL + '/profile',
//             //     data: { ...data },
//             //     headers: { ...authHeader() },
//             // });
//             const response = await UserService.updateUserProfile(data);
//             console.log(response.data.body);
//             dispatch({
//                 type: UPDATE_USER_PROFILE_SUCCESS,
//                 payload: { ...data },
//             });
//         } catch (error) {
//             dispatch({
//                 type: UPDATE_USER_PROFILE_FAIL,
//             });
//             console.log("Fail update user's profile", error);
//         }
//     };
// };

// // const token = getCookie('signin-token');
//     // const response = await UserService.getUserProfile();
//     const response = await axios({
//         method: 'post',
//         // url: `http://localhost:3001/api/v1/user/profile`,
//         url: API_URL + '/profile',
//         headers: { ...authHeader() },
//     });
//     console.log(response.data.body);
//     dispatch({
//         type: GET_USER_PROFILE_SUCCESS,
//         payload: response.data.body,
//     });
// // const response = await UserService.getUserProfile(firstName, lastName);
// // dispatch({
// //     type: GET_USER_PROFILE_SUCCESS,
// //     payload: response.data,
// // });

// export const getUserInfos = (firstName, lastName) => dispatch => {
//     return UserService.getUserProfile(firstName, lastName).then(response => {
//         dispatch({
//             type: GET_USER_PROFILE_SUCCESS,
//             payload: response.data,
//         });

//         return Promise.resolve();
//     });
// };

//
// export const getUserInfos = () => dispatch => {
//     return UserService.getUserProfile().then(
//         response => {
//             console.log(response.data.data.body);
//             dispatch({
//                 type: GET_USER_PROFILE_SUCCESS,
//                 payload: response.data,
//             });

//             return Promise.resolve();
//         },
//         error => {
//             const message =
//                 (error.response && error.response.data && error.response.data.message) ||
//                 error.message ||
//                 error.toString();

//             dispatch({
//                 type: GET_USER_PROFILE_FAIL,
//             });

//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: message,
//             });

//             return Promise.reject();
//         }
//     );
// };

// export const UpdateUserInfos = data => {
//     return dispatch => {
//         // const token = getCookie('signin-token');
//         return axios({
//             method: 'put',
//             url: API_URL + '/profile',
//             data: { ...data },
//             headers: { ...authHeader() },
//             // body: { firstName, lastName },
//             // headers: { 'Content-Type': 'application/json' },
//         })
//             .then(() => {
//                 dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: { ...data } });
//             })
//             .catch(err => console.log(err));
//     };
// };
