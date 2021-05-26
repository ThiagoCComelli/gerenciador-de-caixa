const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGN_OUT':
            return null
        case 'SIGN_IN':
            return action.payload
        default:
            return state
    }
}

export {userReducer}