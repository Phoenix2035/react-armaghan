import types from './auth.types'

const initial_state = {
    userMobile: "",
    verification: "",
    pending: false,
    errors: null,
    showInputVerify: 0
}

const authReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case (types.LOGIN_START):
            // case (types.VERIFY_START):
            return {
                ...state,
                pending: true,
                errors: null,
            }

        case (types.LOGIN_SUCCESS):
            return {
                ...state,
                pending: false,
                userMobile: payload,
                showInputVerify: payload
                // verification: payload.verification,
                // count: payload.count,
            }
        // case (types.VERIFY_SUCCESS):
        //     return {
        //         ...state,
        //         pending: false,
        //         verification: payload.verification,
        //     }

        case (types.LOGIN_FAIL):
            return {
                ...state,
                pending: false,
                errors: payload,
                showInputVerify: payload
                // count: payload.count,
            }

        // case (types.VERIFY_FAIL):
        //     return {
        //         ...state,
        //         pending: false,
        //         errors: payload,
        //     }
        default:
            return state
    }
}
export default authReducer;