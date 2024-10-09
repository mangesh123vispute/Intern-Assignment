import { configureStore } from "@reduxjs/toolkit"; 
import  todoReducer  from './todoSlice'
const store = configureStore({
    reducer:{
        todo:todoReducer
    }
})

export default store