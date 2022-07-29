
// import { PictureAsPdf } from '@mui/icons-material';
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const Cart = () => {
  const {cart,deleteAll,deleteOne} = useContext (CartContext);
  if (cart.length === 0){
   
    return <h2>Todavia no hay productos! Volver al <Link to= '/'>Home</Link> </h2>
  }
  console.log(cart)
  
  let compra=0
  for (let i = 0; i < cart.length; i++) {
    compra=compra+cart[i].cantidad*cart[i].item.precio
  }
  
  return (
    <div>
      {
        cart.map ( (prod) => (
         <div key={prod.item.id}>
          <img src={prod.item.image} alt='Producto'/>
          <div>
            <h3>{prod.item.nombre}</h3>
            <h3>Unidades: {prod.cantidad}</h3>
            {/* <h4>{prod.item.precio}</h4> */}
            <h4>Precio: ${prod.cantidad > 1 ? (prod.item.precio*prod.cantidad
              ) : (prod.item.precio)}</h4>
          </div>
          <button onClick={() =>deleteOne(prod.item.id)}>Eliminar</button>
         </div> 
        
        ))}
        <button onClick={deleteAll}>Eliminar productos</button>
        <h2>Total de la compra : {compra}</h2>
    </div>
    
  )
}

export default Cart;
