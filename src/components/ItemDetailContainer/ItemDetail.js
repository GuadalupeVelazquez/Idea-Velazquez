import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount";

const styles = {
  style : {
    textAlign: 'center',
    fontFamily : 'Helvetica',
    fontWeight: 'bold',
    color:' #222121d1'
   
  }
}

function ItemDetail(item) {

    const productoActual = item.item
    return (
      <div style={styles.style}>  
        <img src={productoActual.image} alt='' />
        <p>{productoActual.nombre}</p>
        <p>{productoActual.description}</p>
        <p>{productoActual.precio}</p>
        <ItemCount/>
      </div>
    )
}

export default ItemDetail