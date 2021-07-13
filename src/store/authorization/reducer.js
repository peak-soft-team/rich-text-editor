import { LOG_OUT, SET_USER } from "./action";


const initialState = {
    user: '',
    token: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }

        case LOG_OUT:
            return initialState
        default:
            return state;
    }
}