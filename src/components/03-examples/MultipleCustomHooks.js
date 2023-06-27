import React from 'react';
import '../02-useEffect/effects.scss';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { state:counter, increment} = useCounter(1);
  const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const {author, quote} = !!data && data[0];
  return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr />
    {
      loading
      ?
      (
        <div className='alert alert-info text-center'>Loading...</div>
      )
      :
      (
        <blockquote className='blockquote text-end'>
        <p className='mb-2'> {quote} </p>
        <footer className='blockquote-footer'> {author} </footer>
        </blockquote>
      )
    }

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
