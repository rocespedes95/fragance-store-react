


import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div>
        <h2>Todos Nuestros Productos</h2>

        <section className='cardProductos'>
        { productos.map(prod => <Item key={productos.id} {...prod}/>)}

        </section>
    </div>
  )
}

export default ItemList