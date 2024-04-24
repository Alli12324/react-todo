import * as React from "react";

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
      id: 3,
      title: 'Add Javascript Expression'
    },
    {
      id: 4,
      title: 'Commit and Add to GitHub' 
    },
  
  ];

function TodoList () {

  return (
    <div>
    <ul>
    {todoList.map((item) => (
         <li key={item.id}>{item.title}</li>
      ))
    }
  </ul>
  </div>
  )  
}
export default TodoList;