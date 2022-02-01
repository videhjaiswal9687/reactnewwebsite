import {USER_REQUEST,USER_SUCCESS,USER_ERROR,CUSTOMER_LOGIN} from './Type'
import axios from 'axios'

const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}
const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}
const customerLogin = details => {
    return {
        type:CUSTOMER_LOGIN,
        payload: details
    }
}

export const custLogin = (email,password) => {
    return function (dispatch) {
        dispatch(userRequest)
        let params = {
            email:email,
            password:password
        }
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",params)
        .then((response)=>{
            console.log(response)
            dispatch(customerLogin(response.data))
        })
        .catch((error) => {
            dispatch(userError(error))
        })
    }
}

export const fetchUser = ()=> {
    return function (dispatch) {
        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            //console.log(response)
            const users = response.data.map((user=>user))
            dispatch(userSuccess(users))
        })
        .catch((error)=>{
            dispatch(userError(error))
        })
    }
}