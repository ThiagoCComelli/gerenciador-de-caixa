import { combineReducers } from 'redux'
import {userReducer,modalInterface,notificationsInterface} from './reducers'

const allReducers = combineReducers({
    user: userReducer,
    post: modalInterface,
    notifications: notificationsInterface
})

export default allReducers