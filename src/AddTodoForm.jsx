import {useState} from "react";

function AddTodoForm (props) {
const [todoTitle, setTodoTitle]=useState("")
   
const handleAddTodo = (event) => {
        event.preventDefault();
    const todoTitle =event.target.title.value;
    console.log(todoTitle);
    setTodoTitle("");
    props.onAddTodo(todoTitle);
    }
return(
    <form onSubmit={handleAddTodo}>
        <input
        type="text"
        name="title"
        value={todoTitle}
        onChange={(event)=>setTodoTitle(event.target.value)}
        ></input>
         <button type="sumbit" value="Add" > AddTodo </button>
    </form>
)
}


export default AddTodoForm;