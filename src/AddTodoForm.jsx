function AddTodoForm () {
return(
   <div> <form>
        <label htmlFor="todoTitle">
        Title  :   <input type="text" name="name" id="todoTitle"/>
        </label>
    </form>

     <input type="submit" value="Add" />
     </div>
)
}


export default AddTodoForm;