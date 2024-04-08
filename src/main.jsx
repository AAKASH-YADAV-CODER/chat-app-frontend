import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/redux.jsx';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <SocketContextProvider>
          <Toaster position='top-center' />
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
);
