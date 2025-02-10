import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './Greetings.jsx';
import TodoList from './Todo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <TodoList />
  </StrictMode>
);
