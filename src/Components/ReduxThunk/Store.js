import {userReducer,loginReducer} from './Reducer'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducer =  combineReducers({
    user:userReducer,
    login:loginReducer
}) 

const Store = createStore(reducer,applyMiddleware(thunk,logger))
export default Store