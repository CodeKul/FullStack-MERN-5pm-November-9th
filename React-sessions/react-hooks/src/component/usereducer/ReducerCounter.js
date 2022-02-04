import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { countreducer, initialState } from './countreducer';

export default function ReducerCounter() {

  // const [count, setCount] = useState(true)

  // setCount(false)

  // reducer functions, dispatch method, payload, actions

  const [count, sendAction] = useReducer(countreducer, {
    count: 0,
    incBy: 1
  })


  return (<div>
    <>
      <h1>Counter with useReducer</h1>

      {/* <h1>{}</h1> */}

      <input type="range" name="" id="" />

      <button onClick={sendAction({ type: "increment" })}>Increment</button>

    </> </div>)
}
