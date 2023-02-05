import React from 'react'
import { NavBar } from '../../NavBar/NavBar'
import alien from "../../imghome/alien.jpg"
import dolcegabana from "../../imghome/DGdolcegarden.jpg"
import armani from "../../imghome/fraganciaArmani.jpg"
import hugoboss from "../../imghome/TheScentHugoBossBanner.jpg"
import Card from 'react-bootstrap/Card';

const Inicio = () => {
  return (
    <div>
        
  
  <div className='mainHome'>
         <div >
                <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={alien} />
      <Card.Body>
        <Card.Title>Mugler Alien</Card.Title>
        <Card.Text>
        Es una fragancia de la familia olfativa Ámbar Amaderada para Mujeres.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div>
<Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={dolcegabana} />
      <Card.Body>
        <Card.Title>Dolce&Gabbana Dolce Garden</Card.Title>
        <Card.Text>
        Es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div>
<Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={armani} />
      <Card.Body>
        <Card.Title>Armani Si Intense</Card.Title>
        <Card.Text>
        Es una fragancia de la familia olfativa Ámbar Floral para Mujeres.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div>
<Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={hugoboss} />
      <Card.Body>
        <Card.Title>Hugo Boss The Scent for her</Card.Title>
        <Card.Text>
        Las Notas de Salida son durazno (melocotón) y fresia; la Nota de Corazón es osmanto (olivo oloroso); la Nota de Fondo es cacao.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
    </div>
  </div>


  

  )
}

export default Inicio