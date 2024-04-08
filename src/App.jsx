import React from 'react';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import HomePage from './pages/home.jsx';

import { useAuthContext } from './context/AuthContext.jsx';
const App = () => {
  const { authUser } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: '/',
      element: authUser ? <HomePage /> : <Navigate to='/login' />
    },
    {
      path: '/login',
      element: authUser ? <Navigate to='/' /> : <LoginPage />
    },
    {
      path: '/signup',
      element: authUser ? <Navigate to='/' /> : <SignupPage />
    }
  ])
  // const backgroundImage = document.body.classList.contains('dark') ? '/bg.png' : '';

  return (
    <div className='bg-cover bg-no-repeat dark:bg-dark-image min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
};

export default App