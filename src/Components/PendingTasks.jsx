import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContexts'
import { useParams } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'

const PendingTasks = () => {
    const{id} = useParams()
    const {todos} = useContext(TodoContext)
    // console.log('lol',id);
    
    const pTasks = todos.filter((ele)=> ele.userId === Number(id) && !ele.completed )
    
    console.log(pTasks);
  return (
    <Container>
        <Row>
            {pTasks.map((ele)=>(
                <Col sm={8} className='mx-auto my'>
                     <Card>
                        <Card.Header>Title</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {ele.title}
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Pending Tasks 
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

export default PendingTasks