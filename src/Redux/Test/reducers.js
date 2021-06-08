import { INCREMENT_REQ, INCREMENT_SUCCESS, INCREMENT_FAIL, DECREMENT_REQ, DECREMENT_SUCCESS, DECREMENT_FAIL } from './type'

const initialState = {
    loading: false,
    value: 0,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQ: {
            return {
                ...state,
                loading: true
            }
        }
        case INCREMENT_SUCCESS: {
            return {
                value: state.value + parseInt(action.payload),
                loading: false
            }
        }
        case INCREMENT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case DECREMENT_REQ: {
            return {
                ...state,
                loading: true
            }
        }
        case DECREMENT_SUCCESS: {
            return {
                value: state.value - parseInt(action.payload),
                loading: false
            }
        }
        case DECREMENT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}
