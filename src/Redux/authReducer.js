import { loginAPI } from "../dalApi/dalApi";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = "SET_AUTH_DATA"
const NULL_AUTH_DATA = "NULL_AUTH_DATA"

let initialState = {
    token: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {

                ...state,
                token: action.token,
                isAuth: true
            }
        case NULL_AUTH_DATA:
            localStorage.removeItem('token')
            localStorage.removeItem('lastPath')
            return {
                token: null,
            }
        default:
            return state
    }
}

export const setAuthDataAction = (token) => ({type: SET_AUTH_DATA, token})
export const nullAuthDataAction = () => ({type: NULL_AUTH_DATA})


export const login = (username, password) => async dispatch => {
    let response = await loginAPI(username, password)

    if (response === 400){
        dispatch(stopSubmit("login", {_error: "Incorrect Username/Password"}))
    }
    else if (response.status === 200){
        return dispatch(setAuthDataAction(response.data.auth_token))

    }
}

export const initializeApp = () => async dispatch => {
    if (localStorage.getItem('token')){
        dispatch(setAuthDataAction(localStorage.getItem('token')))
    }
}

export default authReducer
