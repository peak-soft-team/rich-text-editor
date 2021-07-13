import { loginRequest, signupRequest } from '../../api/auth'

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";

export const authRequest = (user) => async(dispatch) => {
    try{
        const response = await signupRequest(user)
        dispatch(setUser(response))
    }
    catch{
        alert('error')
    }
    
}

export const setUser = (response) => ({
    type: SET_USER,
    payload: response

})
export const logOut = () => ({
    type: LOG_OUT
})