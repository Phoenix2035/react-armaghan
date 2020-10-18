import types from './auth.types';
import Api from "../../../Api";
import {toastr} from 'react-redux-toastr'


export const userLogin = (userMobile) => {
    return (dispatch) => {
        dispatch({type: types.LOGIN_START})
        Api.post('/user/login', {userMobile}).then(({data}) => {
            if (data.code === 48) {
                toastr.success('کد برای شما ارسال شد')
                dispatch({type: types.LOGIN_SUCCESS, payload: {userMobile}})
                console.log(data)
            } else {
                toastr.error('ناموفق')
                // dispatch({type: types.LOGIN_FAIL, payload: {count: 0}})
            }
        }).catch(error => {
            dispatch({type: types.LOGIN_FAIL, payload: error})
        })
    }
}


// export const userVerification = (mobile, verify) => {
//     return (dispatch) => {
//         dispatch({type: types.VERIFY_START})
//         Api.post('/user/check/verification', {userMobile: mobile, verification: verify}).then(res => {
//             if (res.data) {
//                 dispatch({type: types.VERIFY_SUCCESS, payload: res.data})
//             }
//         }).catch(error => {
//             dispatch({type: types.VERIFY_FAIL, payload: error.response.data})
//         })
//     }
// }


// export const userLogin = (data) => {
//     return (dispatch, getState) => {
//         dispatch({type: types.LOGIN_START});
//         const state = getState();
//         const {token} = state.auth;
//         const config = {
//             headers: {'Authorization': `Token ${token}`},
//         };
//         return new Promise((resolve, reject) => {
//             axios.post('/api/contacts/', data, config).then(res => {
//                 dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
//                 resolve()
//             }).catch(error => {
//                 dispatch({type: types.LOGIN_FAIL, payload: error.response.data})
//                 reject()
//             })
//         })
//
//     }
// }