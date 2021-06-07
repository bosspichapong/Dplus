import { SET_TASKS } from "./types"

const initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {
                ...state,
                tasks: action.payload
            }
        }
        default: {
            return state
        }
    }
}

