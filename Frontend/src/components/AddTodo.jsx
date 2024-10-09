import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/todoSlice' 
import { useToast } from "@chakra-ui/react";


const AddTodo = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const toast = useToast()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(input.length === 0)
        return;
        toast({
            title: "Todo Added successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        dispatch(addTodo(input))
      
      
        setInput('')
    }



  return (
    <div className=' p-3 '>
    <form onSubmit={handleSubmit} className="">
    <input
      type="text"
      className="bg-gray-800 m-3 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
  </div>
  )
}

export default AddTodo