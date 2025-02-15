import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RecipeList from './Recipe';
//import TodoList from './Todo.jsx';
//import App from './App';
//import List from './List';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeList />
  </StrictMode>
);
