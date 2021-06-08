import * as TYPES from "./types"

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_TASKS: {
            return {
                ...state,
                tasks: action.payload
            }
        }
        case TYPES.API_REQ: {
            return {
                ...state,
                loading: true
            }
        }
        case TYPES.API_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case TYPES.API_FAIL: {
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

