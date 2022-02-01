import { useState } from 'react'
function ButtonDemo() {
    const [value, setValue] = useState("Press Here");

    const dummyFunction = () => {
        setValue("You Clicked");
    };
    return (
        <button onClick={dummyFunction} title="dummyButton">
            {value}
        </button>
    )
}

export default ButtonDemo;