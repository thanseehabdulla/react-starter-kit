import globalState from './reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({result:globalState})

export default rootReducer;