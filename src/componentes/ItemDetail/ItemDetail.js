import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'

const ItemDetail = ({rutaimg, title, descripcion, categoria, precio}) => {
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
                 <link variant="outline-info">Ver Mas</link>
                 </Card.Body>
               </Card>
    </div>
  )
}

export default ItemDetail