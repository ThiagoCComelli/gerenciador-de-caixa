import { combineReducers } from 'redux'
import {userReducer} from './reducers'

const allReducers = combineReducers({
    user: userReducer
})

export default allReducers