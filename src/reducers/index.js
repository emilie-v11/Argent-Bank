import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth,
    message,
    userReducer,
});

export default rootReducer;
