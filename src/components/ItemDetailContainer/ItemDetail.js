import React from 'react'

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
      </div>
    )
}

export default ItemDetail