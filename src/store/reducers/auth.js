import { AUTH_ERROR, AUTH_START, AUTH_SUCCES, CLEAR_ERRORS, LOGOUT } from "../actions/actionTypes";

const initialState = {
  email: null,
  idToken: null,
  isLogIn: false,
  loading: false,
  error: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state, loading: true
      }

    case AUTH_SUCCES:
      return {
        email: action.data.email,
        idToken: action.data.idToken,
        localId: action.data.localId,
        loading: false,
        isLogIn: true,
        error: null
      }

    case AUTH_ERROR:
      return {
        ...state, loading: false, error: action.error
      }

    case LOGOUT:
      return {
        email: null,
        idToken: null,
        isLogIn: false,
        loading: false,
        error: null,
      }
      case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return { ...state };
  }
}