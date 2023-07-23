import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en useCounter', () => {

    test('should return default values', () => {
        
        const { result } = renderHook( () => useCounter());

        console.log(result.current);
        expect(result.current.counter).toBe(100);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })

    test('should have the value counter in 100', () => {
        
        const { result } = renderHook( () => useCounter(100));

        expect(result.current.counter).toBe(100);
    })

    test('should to increment the counter to 1', () => {
        
        const { result } = renderHook( () => useCounter());

        const {increment} = result.current;

        act( () => {
            increment();
        })

        const { counter } = result.current;
        expect(counter).toBe(101);
    
    });

    test('should to decrement the counter in 1', () => {
        
        const { result } = renderHook( () => useCounter());

        const {decrement} = result.current;

        act( () => {
            decrement();
        })

        const { counter } = result.current;
        expect(counter).toBe(99);
    
    });

    test('should to reset the counter', () => {
        
        const { result } = renderHook( () => useCounter());

        const {increment, reset} = result.current;

        act( () => {
            increment();
            reset();
        })

        const { counter } = result.current;
        expect(counter).toBe(100);
    
    });



})

