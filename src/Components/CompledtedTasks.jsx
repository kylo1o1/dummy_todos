import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContexts'
import { useParams } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'

const CompledtedTasks = () => {
    const{id} = useParams()
    const {todos} = useContext(TodoContext)
    console.log('lol',id);
    
    const cTasks = todos.filter((ele)=> ele.userId === Number(id) && ele.completed )
    
    console.log(cTasks);

    
  return (
    <Container>
      <Row>
        {cTasks.map((elem)=>(
          <Col sm={8} className='mx-auto my-2'>
            <Card>
              <Card.Header>Title</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    {elem.title}
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                    Completed Tasks 
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CompledtedTasks