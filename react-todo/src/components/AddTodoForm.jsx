import React,{useState} from 'react'


const AddTodoForm = ({addTodo}) => {

    
        const [input,setInput] =useState("");

        const handleSubmit =(e)=>{
               e.preventDefault();
               if (input.trim()){
                addTodo(input);
                setInput("")
               } 

        }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodoForm