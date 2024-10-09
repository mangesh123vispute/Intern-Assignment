import { createSlice ,nanoid} from "@reduxjs/toolkit"; 

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        },
        setTodos:(state,action)=>{
            state.todos=action.payload
        }
    }
})

export const { addTodo , removeTodo ,setTodos } = todoSlice.actions
export default todoSlice.reducer