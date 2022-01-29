import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
} from '../actions/types';
import { getCookie } from '../../services/useCookies';

const token = getCookie('signin-token');

const initialState = token ? { isLoggedIn: true, token } : { isLoggedIn: false, token: null };

const authUser = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoaded: false,
                token: payload.token,
                firstName: payload.firstName,
                lastName: payload.lastName,
                id: payload.id,
                email: payload.email,
            };

        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isLoaded: false,
                token: null,
                firstName: '',
                lastName: '',
                id: '',
                email: '',
            };

        case GET_USER_PROFILE:
            return {
                ...state,
                isLoggedIn: true,
                isLoaded: false,
            };

        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoaded: true,
                firstName: payload.firstName,
                lastName: payload.lastName,
                id: payload.id,
                email: payload.email,
            };

        case GET_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
                isLoggedIn: false,
                token: null,
            };

        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
            };

        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};

export default authUser;
