import {USER_REQUEST,USER_SUCCESS,USER_ERROR,CUSTOMER_LOGIN} from './Type'

const InitialState = {
    loading: false,
    users: [],
    error: ''
}
const InitialStateLogin = {
    loading: false,
    details: {},
    error: ''
}
export const loginReducer = (state = InitialStateLogin, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case CUSTOMER_LOGIN: return {
            ...state,
            loading: false,
            details: action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}
//reducer
export const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}