import Fetch from "../utills/fetch"

export const loginRequest = async (user) => await Fetch('auth/login', {method: 'POST', body: user}) 
export const signupRequest = async (user) => await Fetch('auth/signup', {method: 'PUT', body: user}) 