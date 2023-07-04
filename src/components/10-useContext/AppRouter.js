import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
   <div className='container'>
   <Routes>
    <Route exact path='/about'element={<AboutScreen />}></Route>
    <Route exact path='/login'element={<LoginScreen />}></Route>
    <Route exact path='/'element={<HomeScreen />}></Route>
    <Route path='*' element={<Navigate to = "/" replace/>}></Route>
   </Routes>
   </div>
   </BrowserRouter>
  );
}
