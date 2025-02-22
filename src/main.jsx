import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
//import Gallery from './components/Gallery';
import { Person } from './components/Person';
//import Profile from './components/Profile';
//import Poem from './Poem';
//import RecipeList from './Recipe';
//import TodoList from './Todo.jsx';
//import App from './App';
//import List from './List';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>
);
