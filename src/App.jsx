import * as React from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import './App.css'


function App() {
  return (
    <div>

      <hr />

      <h1>Todo List</h1>
      <AddTodoForm/>
      <TodoList />
      <hr />

    </div>
  )
}
export default App;
