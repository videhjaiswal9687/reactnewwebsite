import {COVISHIELD,COVAXIN} from './Type'

//InitialState
const InitialStateCOVISHIELD = {
    numberOfCOVISHIELD:2323
}
const InitialStateCOVAXIN = {
    numberOfCOVAXIN:87878
}

export const covishieldReducer = (state=InitialStateCOVISHIELD,action)=>{
    switch(action.type)
    {
        case COVISHIELD : return {
            ...state,
            numberOfCOVISHIELD:state.numberOfCOVISHIELD-1
        }
        default: return state
    }
}

export const covaxinReducer = (state=InitialStateCOVAXIN,action)=>{
    switch(action.type)
    {
        case COVAXIN : return {
            ...state,
            numberOfCOVAXIN:state.numberOfCOVAXIN-1
        }
        default: return state
    }
}

// const InitialState = {
//     numberOfCOVISHIELD:2323,
//     numberOfCOVAXIN:87878
// }
// export const Reducer = (state=InitialState,action)=>{
//     switch(action.type)
//     {
//         case COVISHIELD : return {
//             ...state,
//             numberOfCOVISHIELD:state.numberOfCOVISHIELD-1
//         }
//         case COVAXIN : return {
//             ...state,
//             numberOfCOVAXIN:state.numberOfCOVAXIN-1
//         }
//         default: return state
//     }
// }