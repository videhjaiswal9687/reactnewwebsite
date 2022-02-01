import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//useSelector:Allows you to extract data from the Redux store state
//useDispatch:This hook returns a reference to the dispatch function from the Redux store
import {buyCOVISHIELD,buyCOVAXIN} from './Action'

export const MedicalHook = () => {
    // const numberOfCOVISHIELD = useSelector(state=>state.numberOfCOVISHIELD);
    // const numberOfCOVAXIN = useSelector(state=>state.numberOfCOVAXIN);

    const numberOfCOVISHIELD = useSelector(state=>state.covishield.numberOfCOVISHIELD);
    const numberOfCOVAXIN = useSelector(state=>state.covaxin.numberOfCOVAXIN);

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Medical Hook Component</h1>
            <h1> Number of COVISHIELD :{numberOfCOVISHIELD}</h1>
            <button onClick={()=> dispatch(buyCOVISHIELD())}>BuyCOVISHIELD</button>
            <h1> Number of COVAXIN :{numberOfCOVAXIN}</h1>
            <button onClick={()=> dispatch(buyCOVAXIN())}>BuyCOVAXIN</button>
        </div>
    )
}
