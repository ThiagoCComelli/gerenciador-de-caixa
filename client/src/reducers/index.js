import { combineReducers } from 'redux'
import {userReducer,modalInterface} from './reducers'

const allReducers = combineReducers({
    user: userReducer,
    post: modalInterface
})

export default allReducers