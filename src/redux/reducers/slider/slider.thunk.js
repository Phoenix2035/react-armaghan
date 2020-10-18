import types from './slider.types';
import Api from "../../../Api";


export const homeCategories = () => {
    return async (dispatch) => {
        dispatch({type: types.HOME_CATEGORIES_START})
        await Api.post('category/search', {endItem: 100, page: 'Home'}).then(({data}) => {
            if (data.code !== 19 && data.code !== 2) {
                // console.log('data', data)
                dispatch({type: types.HOME_CATEGORIES_SUCCESS, payload: {data}})
                dispatch(homeSliderItem(data[0].id, data[0].value))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const homeSliderItem = (categoryId, name) => {
    return async (dispatch) => {
        dispatch({type: types.HOME_SLIDERS_ITEMS_START})
        await Api.post('category/category-result', {id: categoryId}).then(({data}) => {
            if (data.code !== 19 && data.code !== 2) {
                dispatch({type: types.HOME_SLIDERS_ITEMS_SUCCESS, payload: {data, name}})
            }
        }).catch(error => {
            console.log(error)
        })
    }
}


//
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





