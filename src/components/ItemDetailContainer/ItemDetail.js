import React from 'react'

function ItemDetail(item) {

    const productoActual = item.item
    return (
      <div>  
        <img src={productoActual.image} alt='' />
        <p>{productoActual.nombre}</p>
        <p>{productoActual.description}</p>
        <p>{productoActual.precio}</p>
      </div>
    )
}

export default ItemDetail