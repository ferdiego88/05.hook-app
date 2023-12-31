import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './components/10-useContext/MainApp';
//import { HookApp } from './HookApp';
//import { TodoApp } from './components/09-useReducer/TodoApp';
//mport { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { ExampleRef } from './components/04-useRef/ExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/05-useMemo/Memorize';
//import { MemoHook } from './components/06-useMemo/MemoHook';
//import { CallbackHook } from './components/07-useCallBack/CallbackHook';
//import { Padre } from './components/08-tarea-memo/Padre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import './components/09-useReducer/intro-reducer';