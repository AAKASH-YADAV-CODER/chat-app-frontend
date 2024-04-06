import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/redux.jsx';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast"
import { AuthContextProvider } from './context/authContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <Toaster position='top-center' />
        <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
);
