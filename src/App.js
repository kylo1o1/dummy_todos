import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { useContext } from 'react';
import Todoslist from './Pages/Todoslist';
import { TodoContext } from './Context/TodoContexts';
import CompledtedTasks from './Components/CompledtedTasks';
import PendingTasks from './Components/PendingTasks';
function App() {
 
const { todos} = useContext(TodoContext) 

   const newTodo = []
   todos.forEach(ele =>{
      const  todoId = ele.userId
      if(!newTodo[todoId]){
        newTodo[todoId] = {
          id:todoId,
          tasks:0,
          completed_Tasks:0,
          pending_Tasks:0,
        }
      }
      newTodo[todoId].tasks +=1 ;
      if(ele.completed){
        newTodo[todoId].completed_Tasks +=1
      }
      else{
        newTodo[todoId].pending_Tasks += 1 
      }
      
    })
    console.log(newTodo);
    
 
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/todos' element={<Todoslist todo={newTodo}/>}/>
          <Route path='/todos/:id/completed' element={<CompledtedTasks />} />
          <Route path='/todos/:id/pending' element={<PendingTasks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
