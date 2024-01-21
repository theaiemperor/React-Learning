export const add = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: amount
        })
    }
}


export const subtract = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'subtract',
            payload: amount
        })
    }
}