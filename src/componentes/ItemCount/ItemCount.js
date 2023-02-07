import Button from 'react-bootstrap/Button';



const ItemCount = ({max,cantidad, setCantidad,onAdd}) => {
    
        const handleRestar = () => {
            cantidad > 1 && setCantidad (cantidad - 1)
        }
        const handleSumar = () => {
            cantidad < max && setCantidad(cantidad +1)
        }
    
   

  return (
    <div className='butonCount'>
         <Button onClick={handleRestar} variant="success" className='buton-'>-</Button>
        <span>     {cantidad}     </span>
        <Button  onClick ={handleSumar} variant="success" className='buton+' >+</Button>

        <Button onClick={onAdd} variant="danger">Agregar al Carrito</Button>    

    </div>
  )
}

export default ItemCount