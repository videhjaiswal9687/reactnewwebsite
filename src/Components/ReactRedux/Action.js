import {COVISHIELD,COVAXIN} from './Type'

const action1 = {
    type:COVISHIELD
}

const action2 = {
    type:COVAXIN
}

//action creator : wrapping action in a single function
export function buyCOVISHIELD(){
    return action1
}

export function buyCOVAXIN(){
    return action2
}