import { useEffect, useState } from "react"
import{useDispatch} from "react-redux"
import { addTodo } from "../Features/Todo/TodoSlice"
function AddTodo(){
    const [input,setInput]= useState('')
    const dispatch=useDispatch()
   
   
    const onHandle=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')

    }
    
return(
    <form onSubmit={onHandle}  className="space-x-3 mt-12">
   <input 
   type="text"
   value={input}
   onChange={(e)=>setInput(e.target.value)}
   placeholder="Enter Todo...."
   required 
   className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2
    focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
   />
   <button
   className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
   type="submit">Add Todo</button>
    </form>
)
}

export default AddTodo