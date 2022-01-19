import {
    GET_USER_PROFILE_FAIL,
    GET_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
} from '../actions/types';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    isLoggedIn: false,
    user: {},
    error: null,
};

// const user = JSON.parse(localStorage.getItem('user'));

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

// const initialState = {};

export default function userReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload,
                firstName: payload.firstName,
                lastName: payload.lastName,
            };

        // FIXME BUG
        case GET_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
                // isLoggedIn: true,
                // user: payload,
                //     firstName: payload.firstName,
                //     lastName: payload.lastName,
            };

        // FIXME BUG
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                // isLoggedIn: true,
                // user: payload,
                // firstName: payload.firstName,
                // lastName: payload.lastName,
            };

        // FIXME BUG
        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state,
                // isLoggedIn: true,
                // user: payload,
                // firstName: payload.firstName,
                // lastName: payload.lastName,
            };

        default:
            return state;
    }
}
