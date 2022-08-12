import React from 'react'
import {useCounter} from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement,reset} = useCounter(100);

    return (
        <>
          <h1>Counter with Hook: {state}</h1>  
          <hr/>

          <button className="btn btn-success"
                  onClick={() => increment(5)}>
                +Increment
          </button>
          <button className="btn btn-dark"
                  onClick = {reset}>
                Reset
          </button>

          <button className="btn btn-danger mx-2"
                  onClick={() => decrement(5) }>-Decrement</button>
        </>
    )
}
