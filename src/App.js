import * as React from 'react'
import './App.css'

const todoList = [
  {
    id: 1,
    title : 'Set Up Project' 
  },
  {
    id: 2,
    title: 'Create List'
  },
  {
    id: 3
    title: 'Add Javascript Expression'
  },
  {
    id: 4
    title: 'Commit and Add to GitHub' 
  },

];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <ul>
        {
          todoList.map((item) => (
             <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
