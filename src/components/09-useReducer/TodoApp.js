import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import '../styles.scss';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    console.log(todos);

  return (
    <div>
        <h1>TodoApp  ( {todos.length} ) </h1>
        <hr />
        <div className='row'>
            <div className="col-7">
            <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, i) => (
                    <li
                    key={todo.id}
                    className='list-group-item'
                    >
                     <p className='text-center'>
                     { i + 1}.  {todo.desc}
                     </p>


                    <button
                    className='btn btn-danger'
                    >
                        Borrar
                    </button>

                    </li>

                ))
            }
        </ul>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form action="">

                    <input
                    type="text"
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'
                    className='form-control'
                    />

                    <div class="d-grid gap-2 mt-2">
                    <button 
                    class="btn btn-outline-primary"
                    >Agregar
                    </button>
                    </div>

                </form>
            </div>

        </div>
    </div>
  )
}
