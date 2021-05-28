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

const modalInterface = (state = null, action) => {
    switch (action.type) {
        case 'PUT_POST':
            return action.payload
        case 'REMOVE_POST':
            return null
        default:
            return state;
    }
}

export {userReducer,modalInterface}