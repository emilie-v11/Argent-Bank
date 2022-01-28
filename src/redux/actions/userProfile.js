import UserService from '../../services/user.service';
import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_FAIL,
    GET_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
} from './types';

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
