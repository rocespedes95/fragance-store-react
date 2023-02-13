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
          <Button 
              
              onClick={handleRestar}
              variant={ cantidad > 1 ? "success" : "outline-danger" } 
              disabled={cantidad === 1}
              >
              -
          </Button>
        <span>     {cantidad}     </span>
          <Button  
              onClick ={handleSumar} 
              variant={cantidad < max ? "success" : "outline-danger"}
              disabled = {cantidad === Number(max)}
              >
              +
            </Button>

        <Button onClick={onAdd} variant="danger">Agregar al Carrito</Button>    

    </div>
  )
}

export default ItemCount