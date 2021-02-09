import { combineReducers } from 'redux'
import PostReducer from '../reducers/PostReducer'

   
export default combineReducers({
    posts: PostReducer
})