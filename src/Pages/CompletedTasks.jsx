import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const CompletedTasks = ({todo}) => {
    const {id} = useParams()
    const newElem = todo.find(ele => ele.id === Number(id) )
  return (
    <Container>
        {newElem ? (
            <Row>
                <Col>
                <Card>
                    <Card.Header>
                       <h1>
                       {newElem.title}
                       </h1>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        ) :(
            <Row>
                <Col>
                <h1>
                    No Tasks Found!
                </h1>
                </Col>
            </Row>
        )}
    </Container>
  )
}

export default CompletedTasks