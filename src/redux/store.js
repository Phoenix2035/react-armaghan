import {applyMiddleware, createStore,compose} from "redux";
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const middleware = [thunk];


// let store = createStore(persistedReducer,
//     applyMiddleware(...middleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));


export default store;
