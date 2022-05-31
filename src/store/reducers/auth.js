import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCES, LOGOUT, REGISTRATION_ERROR, REGISTRATION_START, REGISTRATION_SUCCES } from "../actions/actionTypes";

const initialState = {
  isLogIn: false,
  loading: false,
  error: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state, loading: true
      }

    case REGISTRATION_SUCCES:
      return {
        ...state, ...action.data, loading: false, isLogIn: true, error: null
      }

    case REGISTRATION_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case LOGIN_START:
      return {
        ...state, loading: true
      }

    case LOGIN_SUCCES:
      return {
        ...state, ...action.data, loading: false, isLogIn: true
      }

    case LOGIN_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case LOGOUT:
      return {
        isLogIn: false,
        loading: false,
        error: null,
      }

    default:
      return { ...state };
  }
}