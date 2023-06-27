import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
    name: '',
    email: ''
   });

    const {name, email} = formState;

  useEffect( () => {
    //console.log('Hey');
  },[])

  useEffect( () => {
    //console.log('FormState cambió');
  },[formState])

  useEffect( () => {
    //console.log('Email cambió');
  },[email])

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
    //console.log(formState);
  }

  return (
    <>
    <h1>useEffect</h1>
     <hr></hr>
     <div className='form-group'>
      <div className='mb-3'>
      <input 
      type="text" 
      name='name'
      className='form-control'
      placeholder='Tu Nombre'
      autoComplete='off'
      value={name}
      onChange={handleInputChange}
      />
      </div>

      <input 
      type="text" 
      name='email'
      className='form-control'
      placeholder='Email'
      autoComplete='off'
      value={email}
      onChange={handleInputChange}
      />
     </div>
     { (name === '123') && <Message/>}
    </>
  )
}
