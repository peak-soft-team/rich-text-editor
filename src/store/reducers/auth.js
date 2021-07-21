import { LOG_IN, LOG_OUT, SIGN_UP } from '../actions/auth.js'

const local = JSON.parse(localStorage.getItem('users'))

const initialState = {
	localUsers: local ? local.localUsers : [],
	currentUser: local
		? local.currentUser
		: {
				lastName: '',
				firstName: '',
				userEmail: '',
				userPassword: '',
				id: '',
				photo: '',
		  },
	success: false,
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			let isLogin = state.localUsers.findIndex(
				(el) => el.userEmail === action.user.userEmail,
			)
			if (isLogin === -1) {
				return {
					...state,
					localUsers: [...state.localUsers, action.user],
					currentUser: action.user,
				}
			} else {
				return state
			}
		case LOG_IN:
			let getUser = state.localUsers.find(
				(el) =>
					el.userEmail === action.obj.inEmail &&
					el.userPassword === action.obj.inPassword,
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

		case LOG_OUT:
			return initialState

		default:
			return state
	}
}
