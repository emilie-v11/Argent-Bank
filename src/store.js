import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // par défaut sur localStorage pour le web

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(
//     persistConfig,
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// let store = createStore(persistedReducer);
// let persistor = persistStore(store);

// export { store, persistor };

export default store;
