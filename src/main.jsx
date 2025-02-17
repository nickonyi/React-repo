import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Profile from './components/Profile';
import './styles/index.css';
//import Poem from './Poem';
//import RecipeList from './Recipe';
//import TodoList from './Todo.jsx';
//import App from './App';
//import List from './List';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
