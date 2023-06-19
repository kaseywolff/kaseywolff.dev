import React, { useState, useRef } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

// pages

// context
import { pageContext } from './context';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route
        path='/'
        element={<MainPage key = 'MainPage' />}
      />

    </Route>
  )
)

const App = () => {
  const pageInfo = useRef(null);

  return (
    <pageContext.Provider value={{pageInfo}}>
      <RouterProvider router={router} />
    </pageContext.Provider>
  )
}