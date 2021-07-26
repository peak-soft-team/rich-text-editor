import { ERROR, LOG_IN, LOG_OUT, SIGN_UP, SET_DATA } from "../actions/auth.js";
const local = JSON.parse(localStorage.getItem("users"));
const initialState = {
  localUsers: [],
  currentUser: {
    lastName: "",
    firstName: "",
    userEmail: "",
    userPassword: "",
    data: "",
    settings: null,
  },
  success: false,
  error: false,
  errorMessage: "",
};
export const authReducer = (state = local ? local : initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SIGN_UP:
      let isLogin = state.localUsers.findIndex(
        (el) => el.userEmail === action.user.userEmail
      );
      if (isLogin === -1) {
        return {
          ...state,
          localUsers: [...state.localUsers, action.user],
          currentUser: action.user,
        };
      } else {
        return state;
      }
    case LOG_IN:
      let getUser = state.localUsers.find(
        (el) =>
          el.userEmail === action.userData.inEmail &&
          el.userPassword === action.userData.inPassword
      );
      if (getUser) {
        return {
          ...state,
          currentUser: getUser,
          success: true,
        };
      } else {
        return state;
      }
    case ERROR:
      return {
        ...state,
        error: !state.error,
        errorMessage: action.message,
      };
    case LOG_OUT:
      return initialState;
    case SET_DATA:
      // let set_datas = state.localUsers.findIndex(
      //   (el) => el.
      // )
      console.log(action);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          data: action.obj,
        },
      };

    default:
      return state;
  }
};
