// import {Reducer} from './Reducer'
// import {createStore} from 'redux'

// const Store = createStore(Reducer)
// export default Store

import {covaxinReducer,covishieldReducer} from './Reducer'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'

//npm install redux-logger

const reducer = combineReducers({
    covaxin:covaxinReducer,
    covishield:covishieldReducer
})

const Store = createStore(reducer,applyMiddleware(logger))

export default Store