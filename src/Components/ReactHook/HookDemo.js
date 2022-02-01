/*
In Functional Component we can not use life cycle methods and state so to use methods and maintain
state we use useState and useEffect methods

useState is a hook that allows us to add react state to function component.we call it inside
a function component to add some local state to it.

useState returns a pair:- current state value and a function that lets us update it.

useEffect call for methods like :-
1.) componentDidMount()
2.) componentDidUpdate()
3.) componentWillUnMount()
*/

import { useState, useEffect } from 'react'

const HookDemo = () => {

    //state
    const [count1, setCount1] = useState(10)
    const [count2, setCount2] = useState(20)
    const [name, setName] = useState("Rahul Sharma")
    const [show, setShow] = useState(true)
    
    //call it once
    // useEffect(()=>{
    //     console.log("Calling useEffect!!",count1)
    // },[])

    //call for a particular state
    // useEffect(()=>{
    //     console.log("Calling useEffect!!",count1,count2,name)
    // },[count1,count2,name])

    useEffect(() => {
        console.log("Calling useEffect!!", count1,count2,name)
    })

    const delChild = () => {
        setShow(false)
    }

    return (
        <div>
            <h1>HookDemo</h1>
            <h1>Count:{count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>
                Update Count1
            </button>
            <h1>Count:{count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>
                Update Count2
            </button>
            <h1>Name:{name}</h1>
            <button onClick={() => setName("Priya Verma")}>
                Update Name
            </button>
            {show ? <ChildComponent/> : <h1>Component has been removed!!</h1>}
            <button onClick={delChild}>
                Delete Child
            </button>
        </div>
    )
}

function ChildComponent() {
    return (
        <div>
            <h1>ChildComponent</h1>
        </div>
    )
}


export default HookDemo