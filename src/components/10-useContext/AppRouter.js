import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/about'element={<AboutScreen />}></Route>
    <Route exact path='/login'element={<LoginScreen />}></Route>
    <Route exact path='/'element={<HomeScreen />}></Route>

   </Routes>
   </BrowserRouter>
  );
}
