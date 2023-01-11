
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'

const Item = ({title,descripcion,categoria,precio,id,rutaimg}) => {
  return (
    <div  className=" row my-4">
                     <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={rutaimg} />
                 <Card.Body>
                   <Card.Title>{title}</Card.Title>
                   
                   <Card.Text>
                     {descripcion}
                   </Card.Text>
                   <Card.Text>
                     Categoria: {categoria}
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   
                   <ListGroup.Item>${precio}</ListGroup.Item>
                 </ListGroup>
                 <Card.Body>
                   <Card.Link href="#">Ver Mas</Card.Link>
                   <Card.Link href="#">Añadir a Carrito</Card.Link>
                 </Card.Body>
               </Card>
                </div>
  )
}

export default Item