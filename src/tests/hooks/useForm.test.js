import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Tests in useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    }


    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm));        
        const [formValues, handleInputChange, reset] = result.current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ ,handleInputChange ] = result.current;

        let newForm = {
            target: {
                name: 'name',
                value: 'Gianluca'
            }
        }

        act( () => {
  
            handleInputChange(newForm);
        })

        const [formValues] = result.current;
        
        expect(formValues).toEqual({...initialForm, name: 'Gianluca'});

    });

    test('debe de resetar el formulario', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ ,handleInputChange, reset ] = result.current;

        let newForm = {
            target: {
                name: 'name',
                value: 'Gianluca'
            }
        }

        act( () => {
  
            handleInputChange(newForm);
            reset();
        })

        const [formValues] = result.current;
        
        expect(formValues).toEqual(initialForm);

    });

})