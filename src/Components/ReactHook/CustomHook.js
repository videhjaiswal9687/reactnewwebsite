import {useState} from 'react'

function Stepper(){

    const [counter,setCounter] = useState(1)

    const handleCounterIncrement = () => {
        setCounter(counter+1)
    }

    const handleCounterDecrement = () => {
        setCounter(counter-1)
    }

    return {
        counter,handleCounterIncrement,handleCounterDecrement
    };

}

export default Stepper