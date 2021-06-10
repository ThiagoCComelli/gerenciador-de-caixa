import { randomstring } from 'randomstring-js'

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

const notificationsInterface = (state = [], action) => {
    switch (action.type) {
        case 'PUT_NOTIFICATION':
            return [...state,{props:action.payload,id:randomstring()}]
        case 'REMOVE_NOTIFICATION':
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state;
    }
}

const contextMenu = (state = null, action) => {
    switch (action.type) {
        case 'PUT_CONTEXT':
            return action.payload
        case 'REMOVE_CONTEXT':
            return null
        default:
            return state;
    }
}

export {userReducer,modalInterface,notificationsInterface,contextMenu}