// import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';

function App() {

  return (
    <>
      <AllRoutes />
      <ToastContainer />
    </>
  )
}

export default App
