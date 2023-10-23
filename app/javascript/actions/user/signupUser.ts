

import {
  SIGNUP_USER,
  USER_SUCCESS,
  USER_ERRORS,
  USER_FAILURE,
} from './actionConstants';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
}

export const signupUser = (user: User, csrfToken: string) => {
  return (dispatch: any) => {
    dispatch({ type: SIGNUP_USER })
    
    fetch(`/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ user })
    })
    .then(res => res.json())
    .then(data => {
        if (data.user !== undefined) {
            localStorage.setItem("token", data.jwt)
            return dispatch({ type: USER_SUCCESS, payload: data })
        } else {
            return dispatch({ type: USER_ERRORS, payload: data })
        }
    })
    .catch(err => {
        return dispatch({ type: USER_FAILURE, payload: err })
    })
  }
}
