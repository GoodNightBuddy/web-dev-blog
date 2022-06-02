import axios from "axios"
import { AUTH_ERROR, AUTH_START, AUTH_SUCCES, CLEAR_ERRORS, LOGOUT } from "./actionTypes"
import { getCookie, setCookie, deleteCookie } from "../../library/workWithCookies"


export function auth(data, autoLogIn, type) {
  return async dispatch => {

    dispatch(authStart())

    try {
      let url = ''

      if(type === 'logIn') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARgM-QIF_l7_v-GyPaCgA0dm-70Vpk57c'
      }else if(type === 'registration') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARgM-QIF_l7_v-GyPaCgA0dm-70Vpk57c'
      } else {
        throw new Error('invalid auth action')
      }
      

      const authData = {
        ...data,
        returnSecureToken: true
      }

      const response = await axios.post(url, authData)

      if (autoLogIn) {
        setCookie('email', response.data.email, {expires: new Date(Date.now() + 31536e6)})
        setCookie('idToken', response.data.idToken, {expires: new Date(Date.now() + 31536e6)})
        setCookie('localId', response.data.localId, {expires: new Date(Date.now() + 31536e6)})
      }

      dispatch(authSucces(response.data))

    } catch (error) {
      dispatch(authError(error))
    }

  }

}

export function authSucces(data) {
  return {
    type: AUTH_SUCCES,
    data
  }
}

export function authStart() {
  return {
    type: AUTH_START
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error
  }
}

export function logOut() {
  deleteCookie('email')
  deleteCookie('idToken')
  deleteCookie('localId')
  return {
    type: LOGOUT
  }
}

export function clearErrors () {
  return {
    type: CLEAR_ERRORS
  }
}