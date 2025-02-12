import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import TodoList from './Todo.jsx';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
