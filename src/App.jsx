import React from 'react';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import HomePage from './pages/home.jsx';

import { useAuthContext } from './context/authContext.jsx';
const App = () => {
  const { authUser } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: '/',
      element:authUser ? <HomePage/> : <Navigate to='/login'/>
    },
    {
      path: '/login',
      element: authUser ? <Navigate to='/'/> : <LoginPage/>
    },
    {
      path: '/signup',
      element: authUser ? <Navigate to='/'/> : <SignupPage/>
    }
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App