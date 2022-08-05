import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const Cart = () => {
  const {cart,deleteAll,deleteOne} = useContext (CartContext);
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [phone, setPhone] = useState ('')


  const createOrder = async (name,phone,email) => {
    // e.preventDefault ();
    const db = getFirestore ();
    const ordersCollectionQuery = collection (db,'orders');
    const order = {
  buyer : {
    name : name ,
    email : email, 
    phone : phone,
  },

  items :cart.map(prod => ({id: prod.item.id, nombre: prod.item.nombre, precio: prod.item.precio, unidades: prod.cantidad })) ,
  total: {compra}
  
}

await addDoc (ordersCollectionQuery, order)
.then((response) => {
  console.log(response.id);
  return response.id;

})

.catch((error) => {
  console.log (error);
})

  }

  const cambiarName = (e) => {
    setName (e.target.value)
  }

  const cambiarPhone = (e) => {
    setPhone(e.target.value)
  }

  const cambiarEmail = (e) => {
    setEmail(e.target.value)
  }

  const enviarDatos = (e) => {
    e.preventDefault ();
    createOrder(name,phone,email)
  }



  if (cart.length === 0){
   
    return <h2>Todavia no hay productos! Volver al <Link to= '/'>Home</Link> </h2>
  }
  
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
            <h4>Precio: ${prod.cantidad > 1 ? (prod.item.precio*prod.cantidad
              ) : (prod.item.precio)}</h4>
          </div>
          <button onClick={() =>deleteOne(prod.item.id)}>Eliminar</button>
         </div> 
        
        ))}
        <button onClick={deleteAll}>Eliminar productos</button>
        <h3>Total de la compra : {compra}</h3>

              <h2>Ingrese sus datos para crear su orden</h2>
              <form onSubmit={enviarDatos}>
                    <label>
                      Nombre:
                      <input type="name" value={name} onChange={cambiarName} />
                    </label>
                    

                    <label>
                      Telefono:
                      <input type="phone" value={phone} onChange={cambiarPhone} />
                    </label>
                    

                    <label>
                      Email:
                      <input type="email" value={email} onChange={cambiarEmail}/>
                    </label>
                    <input type="submit" value="Generar orden" />
                  </form>

    </div>

    
    
  )
}

export default Cart;
