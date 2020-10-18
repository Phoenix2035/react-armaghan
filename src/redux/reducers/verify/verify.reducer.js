import types from './verify.types'

const initial_state = {
    verification: "",
    pending: false,
    errors: null
}
const verifyReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case (types.VERIFY_START):
            return {
                ...state,
                pending: true,
                errors: null,
            }

        case (types.VERIFY_SUCCESS):
            return {
                ...state,
                pending: false,
                verification: payload,
            }

        case (types.VERIFY_FAIL):
            return {
                ...state,
                pending: false,
                errors: payload,
            }
        default:
            return state
    }
}
export default verifyReducer;