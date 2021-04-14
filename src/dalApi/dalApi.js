import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://agile-garden-50413.herokuapp.com/api/"

})

export const loginAPI = (username, password) => {
    return instance.post("token/login/", {username, password}).then(
        response => {
            return response
        },
        error => {
            return error.response.status
        }
    )
}


export const requestUsersAPI = (token) => {
    return instance.get("users/", {
        headers: {
            authorization: `Token ${token}`
        }
    }).then(
        response => {
            return response
        }
    )
}


