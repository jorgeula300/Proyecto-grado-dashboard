import React from 'react';
import { router } from './components/router';
import { RouterProvider } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Proteccion from "./components/Proteccion";




function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
