import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import TodoList from './components/TodoList';
import Validation from './components/Validation';

function App () {
  return (
    <div className="App">
      <TodoList></TodoList>
      <Validation></Validation>
      
    </div>
  );
}

export default App;
