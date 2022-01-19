// import AuthService from '../services/auth.service';

import UserService from '../services/user.service';
import {
    GET_USER_PROFILE_FAIL,
    GET_USER_PROFILE_SUCCESS,
    SET_MESSAGE,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
} from './types';

// FIXME BUG
export const getUserInfos = () => async dispatch => {
    try {
        const 
    } catch (error) {
        
    }
    return UserService.getUserProfile(firstName, lastName).then(response => {
        dispatch({
            type: GET_USER_PROFILE_SUCCESS,
            payload: response.data,
        });

        return Promise.resolve();
    });
};
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

export const UpdateUserInfos = (firstName, lastName) => dispatch => {
    return UserService.updateUserProfile(firstName, lastName).then(
        response => {
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
            });

            return Promise.resolve();
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: UPDATE_USER_PROFILE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};
