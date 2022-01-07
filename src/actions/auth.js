import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    // EDIT_PROFILE_SUCCESS,
    // EDIT_PROFILE_FAIL,
} from './types';
import AuthService from '../services/auth.service';

export const register = (firstName, lastName, email, password) => dispatch => {
    return AuthService.register(firstName, lastName, email, password).then(
        response => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (email, password) => dispatch => {
    return AuthService.login(email, password).then(
        data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data,
            });
            console.log(data);

            return Promise.resolve();
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => dispatch => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
