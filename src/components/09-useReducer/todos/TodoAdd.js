import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

 const [{ description }, handleInputChange, reset] = useForm({
        description: "",
      });
 console.log(description);

 const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };


  return (
    <>
              <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
              name="description"
              onChange={handleInputChange}
              value={description}
            />
            <div className="d-grid gap-2 mt-2">
              <button type="submit" className="btn btn-outline-primary">
                Agregar
              </button>
            </div>
          </form>
    </>
  )
}
