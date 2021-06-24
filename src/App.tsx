import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodosList from './components/TodosList/TodosList';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm/>
        <TodosList/>
      </div>
    </>  
  );
}

export default App;
