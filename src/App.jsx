import {useState} from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import './App.css'

function App() {
  // const addTodo= (newTodo) => {
  //   const newItem={
  //     id: TodoList.length+1, 
  //     title: newTodoTitle
  //   }
  //   setTodoList([...todoList, newItem])
  // }
    const [todoList, setTodoList] =useState([    {
      id: 1,
      title : 'Set Up Project' 
    },
    {
      id: 2,
      title: 'Create List'
    },
    {
      id: 3,
      title: 'Add Javascript Expression'
    },
    {
      id: 4,
      title: 'Commit and Add to GitHub' 
    },])

    const [newTodo, setNewTodo] = useState("")
  return (
    <div>

      <hr />

      <h1>Todo List</h1>
      
     <AddTodoForm onAddTodo={setNewTodo}/>
     <li>{newTodo}</li>
      <TodoList todoList={todoList}/>
      <hr />

    </div>
  )
}
export default App;
