import {useState} from 'react'

export const useCounter = (initialState = 1) => {
  
    const [state, setState] = useState(initialState);

    const reset = () => {
        setState(initialState);
    }
    const increment = () => {
        setState(state + 1 );
    }

    const decrement = (factor = 1) => {
        setState(state - factor );
    }

    return {
        state,
        increment,
        decrement,
        reset,
    };
}
