import {combineReducers} from "redux";
import authReducer from './auth/auth.reducer'
import categoryReducer from './slider/slider.reducer'
// import verifyReducer from "./verify/verify.reducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    // verify:verifyReducer,
    toastr: toastrReducer
});

export default rootReducer;