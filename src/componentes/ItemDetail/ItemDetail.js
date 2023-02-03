import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({rutaimg, title, descripcion, categoria, precio}) => {
     const Navigate = useNavigate()
    const handleVolver = ()=> {
        Navigate(-1)
    }
  return (
    <div>
        <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={rutaimg} />
                 <Card.Body>
                   <Card.Title>{title}</Card.Title>
                   <Card.Text>
                     Categoria: {descripcion}
                   </Card.Text>
                   
                   <Card.Text>
                     Categoria: {categoria}
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   
                   <ListGroup.Item>${precio}</ListGroup.Item>
                 </ListGroup>
                 <Card.Body>
                 <Button variant="warning" onClick={handleVolver}>Volver</Button>
                 </Card.Body>
               </Card>
    </div>
  )
}

export default ItemDetail