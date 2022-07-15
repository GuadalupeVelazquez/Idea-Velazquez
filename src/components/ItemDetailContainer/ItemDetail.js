import React from 'react'
import {useParams} from 'react-router-dom'
import {productos} from '../../mock/productos'

function ItemDetail() {
    const param = useParams().id
    const productoActual = productos[param-1]
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