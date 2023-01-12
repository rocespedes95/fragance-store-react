


import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div>
        

        <section className='cardProductos'>
        { productos.map(prod => <Item key={productos.id} {...prod}/>)}

        </section>
    </div>
  )
}

export default ItemList