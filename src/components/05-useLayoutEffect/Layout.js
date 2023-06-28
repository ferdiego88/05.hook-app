import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.scss';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const Layout = () => {

  const pTag = useRef();



  const { state:counter, increment} = useCounter(1);
  const { data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
    return () => {
    
    };
  }, [quote])


  return (
    <>
    <h1>Layout Effect</h1>
    <hr />
    <blockquote className='blockquote text-end'>
        <p 
        ref={pTag}
        className='mb-2'
        > 
        {quote} </p>
    </blockquote>
    <pre>
    {
      JSON.stringify(boxSize,null,3)
    }
    </pre>
    <div>
      <button
      onClick={increment}
      className='btn btn-primary'>
        Siguiente Frase
      </button>
    </div>

    </>
  )
}
