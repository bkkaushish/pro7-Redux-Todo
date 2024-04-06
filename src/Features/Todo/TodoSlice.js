import { createSlice, nanoid } from "@reduxjs/toolkit";


export const TodoSlice= createSlice({
  name:"Todo",
  initialState:{
    Todos:[{
        id: 1,
        text:"Hello User",
    }]
  },
  reducers:{
    addTodo:(state,action)=>{
        const todo={
            id: nanoid(),
            text: action.payload,
        }
        state.Todos.push(todo)
    },
    removeTodo:(state,action)=>{
        state.Todos=state.Todos.filter((todo)=>(todo.id!==action.payload))
    },
    updateTodo:(state,action)=>{
        //to be continued
    },
  }
})


export const {addTodo,removeTodo} = TodoSlice.actions//dough why use TodoSlice.action

export default TodoSlice.reducer