export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const ERROR = "ERROR";
export const SET_DATA = "SET_DATA";

export const sign_up = (user) => ({
  type: SIGN_UP,
  user,
});
export const log_in = (userData) => ({
  type: LOG_IN,
  userData,
});
export const log_out = () => ({
  type: LOG_OUT,
});
export const error = (message) => ({
  type: ERROR,
  message,
});
export const set_data = (obj) => ({
  type: SET_DATA,
  obj,
});
