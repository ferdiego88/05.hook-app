import React from 'react'
import './counter.scss';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement} = useCounter();

    
      return (
        <>
        <h1> Counter with Hook: { counter }</h1>
        <hr></hr>
        <button className='btn btn-primary'onClick={() => increment(2)}> +1 </button>
        <button className='btn btn-primary'onClick={() => useCounter}> Reset </button>
        <button className='btn btn-primary'onClick={() => decrement(2)}> -1 </button>
        </>
      )
}
