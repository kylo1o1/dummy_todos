import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tasks.css'
// import { Link, NavLink } from 'react-router-dom';

const Todos = ({todos}) => {
    
  return (
    <Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Tasks</th>
        <th>Completed Tasks</th>
        <th>Pending Tasks</th>
      </tr>
    </thead>
    <tbody>
      {
        todos.map((elem) => (
            <tr key={elem.id} className='t-row'>
                <td>
                    {elem.id}
                </td>
                <td>
                    {elem.tasks}
                </td>
                <td>
                   <Link to={`/todos/${elem.id}/completed`}>
                   
                   {elem.completed_Tasks}
                  
                   </Link>
                </td>
                <td>
                <Link to={`/todos/${elem.id}/pending`}>
                   
                   {elem.pending_Tasks}
                  
                   </Link>              
                     </td>
                
            </tr>

        ))
      }
    </tbody>
  </Table>
)}


export default Todos