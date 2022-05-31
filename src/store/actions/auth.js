import axios from "axios"
import { LOGIN_START, LOGIN_SUCCES, LOGOUT, REGISTRATION_ERROR, REGISTRATION_START, } from "./actionTypes"
import { getCookie, setCookie, deleteCookie } from "../../library/workWithCookies"


export function logIn(data, autoLogin) {
  return async dispatch => {

    dispatch(logInStart())
    
    try {

      const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARgM-QIF_l7_v-GyPaCgA0dm-70Vpk57c'

      const authData = {
        ...data,
        returnSecureToken: true
      }

      const response = await axios.post(url, authData)
      response.data.autoLogin = autoLogin

      setCookie('loacalId', response.data.localId, {
        
      })
      // setCookie('email', response.data.email)
      // setCookie('idToken', response.data.idToken)

      dispatch(logInSucces(response.data))

    } catch (error) {
      dispatch(authError(error))
    }
    
  }

}

export function logInStart() {
  return {
    type: LOGIN_START
  }
}

export function logInSucces(data) {
  return {
    type: LOGIN_SUCCES,
    data
  }
}

export function register(data, autoLogin) {
  return async dispatch => {
    dispatch(registrationStart())

    try {

      const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARgM-QIF_l7_v-GyPaCgA0dm-70Vpk57c'

      const authData = {
        ...data,
        returnSecureToken: true
      }

      const response = await axios.post(url, authData)

      response.data.autoLogin = autoLogin
      dispatch(logInSucces(response.data))
    } catch (error) {
      dispatch(authError(error))
    }
  }

}

export function registrationStart() {
  return {
    type: REGISTRATION_START
  }
}

export function authError(error) {
  return {
    type: REGISTRATION_ERROR,
    error
  }
}

export function logOut() {
  return {
    type: LOGOUT
  }
}