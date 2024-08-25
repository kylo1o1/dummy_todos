import { createContext, useEffect, useState } from "react";


export const TodoContext = createContext()
export const TodoProvider = ({children}) =>{
    

  const [todos,setTodos] = useState([])
  useEffect(()=>{
    async function getTodos() {
      const data  = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=>res.json())
      console.log(data)
      setTodos(data)    
      
    }
    getTodos()
    
    
},[])   

  
return(
    <TodoContext.Provider value={{todos}}>
        {children}
    </TodoContext.Provider>
)
}