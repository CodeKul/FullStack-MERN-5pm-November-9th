import React, { useState } from 'react';

export default function FunctionCounter() {

    const [counter, setCounter] = useState(0)

    console.log(counter)


    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }


    return (<div>



        <h1>Function Component - Counter Example</h1>

        <h1>Counter : {counter} </h1>

        {console.log(counter)}

        <button onClick={handleIncrement}>Increment +</button>

        <button onClick={handleDecrement}>Decrement -</button>
    </div>)
}
