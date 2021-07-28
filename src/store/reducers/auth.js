import { ERROR, LOG_IN, LOG_OUT, SIGN_UP, SET_DATA } from '../actions/auth.js'
import { Route } from 'react-router-dom'
import WelcomePage from '../../pages/WelcomePage/index.jsx'

const local = JSON.parse(localStorage.getItem('users'))

const currentUser = {
	lastName: '',
	firstName: '',
	userEmail: '',
	userPassword: '',
	data: "",
}

const initialState = {
	localUsers: [],
	currentUser,
	success: false,
	error: false,
	errorMessage: '',
}
export const authReducer = (state = local ? local : initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			let isLogin = state.localUsers.findIndex(
				(el) => el.userEmail === action.user.userEmail,
			)
			if (isLogin === -1) {
				return {
					...state,
					localUsers: [...state.localUsers, action.user],
					currentUser: {
						...currentUser,
						...action.user,
					},
					success: true,
				}
			} else {
				return state
			}
		case LOG_IN:
			let getUser = state.localUsers.find(
				(el) =>
					el.userEmail === action.userData.inEmail &&
					el.userPassword === action.userData.inPassword,
			)
			if (getUser) {
				return {
					...state,
					currentUser: getUser,
					success: true,
				}
			} else {
				return state
			}
		case ERROR:
			return {
				...state,
				error: !state.error,
				errorMessage: action.message,
			}
		case LOG_OUT:
			return {
				...state,
				currentUser,
				success: false,
			}

		case SET_DATA:
			console.log(action);
			return {
				...state,
				currentUser: { ...state.currentUser, data: action.obj },
				localUsers: state.localUsers.map((el) => {
					return el.userEmail === state.currentUser.userEmail
						? { ...el, data: action.obj }
						: el
				}),
			}

		default:
			return state
	}
}
