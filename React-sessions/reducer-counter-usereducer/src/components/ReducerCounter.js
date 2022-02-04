import React,  { useReducer } from 'react';
import reducercounter from '../reducers/reducercounter';



export default function ReducerCounter() {

    const [counter, sendAction] = useReducer(reducercounter, {
        count: 0,
        incBy: 1
    })

    // sendAction((counter)=>couter, newValue)
    
    return <div>


        <h1>Counter with useReducer</h1>

        <h1>Counter : { counter.count}</h1>

        <input min={10} max={40} onChange={(e)=>{sendAction({type:"update", payload: Number(e.target.value)})}} value={counter.incBy} type="range" name="" id="" />

        <h2>change By {counter.incBy}</h2>

        <button onClick={()=>{sendAction({type: "increment"})}}>Increment</button>
        <button onClick={()=>{sendAction({type: "decrement"})}}>Decrement</button>
        <button onClick={()=>{sendAction({type: "reset"})}}>Reset</button> 
    </div>
}
