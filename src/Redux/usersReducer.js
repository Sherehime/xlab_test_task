import {requestUsersAPI} from "../dalApi/dalApi";


const SET_USERS = "SET_USERS"
const NULL_USERS_DATA = "NULL_USERS_DATA"


let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case NULL_USERS_DATA: {
            return {
                users: []
            }
        }
        default:
            return state
    }
}

export const setUsersAction = (users) => ({type: SET_USERS, users: users})
export const nullUsersDataAction = () => ({type: NULL_USERS_DATA})


export const requestUsers = (token) => {
    return async dispatch => {
        let response = await requestUsersAPI(token)

        if (response.status === 200) {
            dispatch(setUsersAction(response.data))
        }
    }
}





export default usersReducer
