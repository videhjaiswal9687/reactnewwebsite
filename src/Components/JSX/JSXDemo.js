/*
JSX stands for Javascript XML
It allows us to write HTML Code in React 
It allows us to write HTML elements in Javascript and place them in the DOM.
It converts HTML tags into react elements.
*/
import React from 'react'

//without JSX
const myelem = React.createElement(
    'h1',
    { className: 'test' },
    'React Without JSX'
)

//Using JSX
const name = "Videh Jaiswal"
const msg = <h1 style={{ backgroundColor: 'teal', color: 'white' }}>Hello,{name}</h1>

function calculate(x, y) {
    if (x > y) {
        return <h1 className="add">Addition is :{x + y}</h1>
    } else {
        return <h1 className="mul">Multiply is :{x * y}</h1>
    }
}

const list = (
    <ul style={{ backgroundColor: 'red', color: 'white', fontSize: 32 }}>
        <li>Indore</li>
        <li>Ujjain</li>
        <li>Bhopal</li>
        <li>Ratlam</li>
    </ul>
)

export const JSXDemo = () => {
    return (
        // <div>
        //  {myelem}
        //  {msg}
        //  {calculate(25,12)}
        //  {list}
        // </div>
        <>
            {myelem}
            {msg}
            {calculate(25, 12)}
            {list}
        </>
    )
}
