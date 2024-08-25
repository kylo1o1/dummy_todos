import React from 'react'
import Todos from '../Components/Todos'

const Todoslist = ({todo}) => {
   console.log('....',todo);
   
  return (
    <Todos todos={todo}/>
)
}

export default Todoslist