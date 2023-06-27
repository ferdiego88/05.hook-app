import React, { useEffect } from 'react';
import './effects.scss';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email cambio');
  }, [email])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1>FormWithCustomHook</h1>
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

      <div className='mb-3'>
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
      <div className='mb-3'>
      <input 
      type="password" 
      name='password'
      className='form-control'
      placeholder='******'
      value={password}
      onChange={handleInputChange}
      />
      </div>
     </div>
     <button 
     type='submit'
     className='btn btn-primary'
     >
      Guardar
     </button>
    </form>
  )
}
