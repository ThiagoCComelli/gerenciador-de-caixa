import { randomstring } from 'randomstring-js'
import codes from '../utils/codes.json'

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
            return [...state,{props:codes[action.payload],id:randomstring()}]
        case 'REMOVE_NOTIFICATION':
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state;
    }
}

export {userReducer,modalInterface,notificationsInterface}