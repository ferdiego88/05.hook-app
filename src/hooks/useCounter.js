import {useState} from 'react';

export const useCounter = (initialState = 100) => {
  
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter(initialState);
    }
    const increment = () => {
        setCounter(counter + 1 );
    }

    const decrement = (factor = 1) => {
        setCounter(counter - factor );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}
