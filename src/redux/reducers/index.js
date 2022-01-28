import { combineReducers } from 'redux';
import message from './message';
import authUser from './auth-user';

const rootReducer = combineReducers({
    authUser,
    message,
});

export default rootReducer;
