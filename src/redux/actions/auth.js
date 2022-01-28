import AuthService from '../../services/auth.service';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './types';
import { getUserInfos } from './userProfile';

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

export const login = (email, password, rememberMe) => dispatch => {
    return AuthService.login(email, password).then(
        data => {
            if (rememberMe) {
                localStorage.setItem('memo-useremail', email);
                localStorage.setItem('memo-userpassword', password);
            } else {
                localStorage.removeItem('memo-useremail');
                localStorage.removeItem('memo-userpassword');
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.body,
            });

            dispatch(getUserInfos());
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
        }
    );
};

export const logout = () => dispatch => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};

// export const login = (email, password) => async dispatch => {
//     try {
//         const data = await AuthService.login(email, password);
//              console.log(data);
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: data,
// //             payload: { token: data.body.token },
//         });
//         dispatch(getUserInfos());
//     } catch (error) {
//         const message =
//             (error.response && error.response.data && error.response.data.message) ||
//             error.message ||
//             error.toString();

//         dispatch({
//             type: LOGIN_FAIL,
//         });

//         dispatch({
//             type: SET_MESSAGE,
//             payload: message,
//         });
//     }
// };
