import * as TYPES from './type'

export const increment = (value) => dispatch => {
    dispatch({
        type: TYPES.INCREMENT_REQ
    })
    dispatch({
        type: TYPES.INCREMENT_SUCCESS,
        payload: value
    })
}

export const decrement = (value) => dispatch => {
    dispatch({
        type: TYPES.DECREMENT_REQ
    })
    dispatch({
        type: TYPES.DECREMENT_SUCCESS,
        payload: value
    })
}