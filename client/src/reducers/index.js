import { combineReducers } from 'redux'
import {userReducer,modalInterface,notificationsInterface,contextMenu} from './reducers'

const allReducers = combineReducers({
    user: userReducer,
    post: modalInterface,
    notifications: notificationsInterface,
    context: contextMenu
})

export default allReducers