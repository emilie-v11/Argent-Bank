import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    // EDIT_PROFILE_FAIL,
    EDIT_PROFILE_SUCCESS,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    isLoggedIn: false,
    user: null,
};

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

function auth(state = initialState, action) {
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
                user: payload.user,
                // user: payload,
            };
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload,
                firstName: payload.firstName,
                lastName: payload.lastName,
            };

        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

export default auth;
