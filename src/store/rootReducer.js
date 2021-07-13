import { authReducer } from './authorization/reducer'
import { combineReducers } from 'redux'



export const rootReducer =  combineReducers({
	authReducer: authReducer,
})
