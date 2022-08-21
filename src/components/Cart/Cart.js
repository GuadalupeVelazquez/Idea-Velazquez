import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const styles = {
  style : {
    textAlign: 'center',
    lineBreak: 'auto',
    fontFamily : 'Helvetica',
    fontWeight: 'bold',
    color:' #222121d1',
    borderStyle: 'solid',
    borderColor:'rgb(213, 216, 232)',
    margin: '150px',
    marginTop: '50px',
    borderRadius: '20px',
   
  },

  styleDos : {
    textAlign: 'center',
    lineBreak: 'auto',
    fontFamily : 'Helvetica',
    fontWeight: 'bold',
    color:' #222121d1',
    borderStyle: 'double',
    borderColor:'rgb(80, 88, 128)',
    margin: '150px',
    borderRadius: '20px',
    paddingBottom: '20px',
    
   
  },

  boton: {
    margin:'5px',
    textDecoration: 'none',
    padding: '5px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#1883ba',
    borderRadius: '6px',
    border: '2px solid rgba(63, 52, 134, 0.57)',
    boxShadow: 'rgb(34, 36, 36) 2px 2px 5px'
  },

  colorTitulos :{
    color: 'rgba(24, 24, 26, 0.82)',
    margin:'5px'
  },

  distances : {
    margin:'15px',
    textDecoration: 'none',
    padding: '5px',
    fontWeight: '600',
    color: 'rgba(10, 93, 136, 0.86)', 
    backgroundColor: ' rgb(197, 206, 208)',
    borderRadius: '6px',
    border: '2px solid rgba(63, 52, 134, 0.57)',
    boxShadow: 'rgb(34, 36, 36) 2px 2px 5px'
  }

  
}

const Cart = () => {
  const {cart,deleteAll,deleteOne} = useContext (CartContext);
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [phone, setPhone] = useState ('')


  const createOrder = async (name,phone,email) => {
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
  alert( `su codigo de compra es el siguiente : ${response.id}`)
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
   
    return <h2 style={styles.colorTitulos}>Todavia no hay productos! Volver al <Link to= '/'>Home</Link> </h2>
  }
  
  let compra=0
  for (let i = 0; i < cart.length; i++) {
    compra=compra+cart[i].cantidad*cart[i].item.precio
  }
  
  return (
    <div style={styles.style} >
      {
        cart.map ( (prod) => (
         <div key={prod.item.id}>
          <h1 style={styles.colorTitulos}>Tus Productos</h1>
          <img src={prod.item.image} alt='Producto'/>
          <div>
            <h3>{prod.item.nombre}</h3>
            <h3>Unidades: {prod.cantidad}</h3>
            <h4>Precio: ${prod.cantidad > 1 ? (prod.item.precio*prod.cantidad
              ) : (prod.item.precio)}</h4>
          </div>
          <button style={styles.boton} onClick={() =>deleteOne(prod.item.id)}>Eliminar Producto</button>
         </div> 
        
        ))}
        <button style={styles.boton} onClick={deleteAll}>Eliminar todos los productos</button> 

        <div style={styles.styleDos}>

        <h1 >Total de la compra : $ {compra}</h1>

              <h2 >Ingrese sus datos para crear su orden</h2>

              <form onSubmit={enviarDatos}>
                    <label style={styles.colorTitulos}>
                      Nombre:
                      <input type="name" value={name} onChange={cambiarName} />
                    </label>
                    
                    <label style={styles.colorTitulos}>
                      Telefono:
                      <input type="phone" value={phone} onChange={cambiarPhone} />
                    </label>
                    
                    <label style={styles.colorTitulos}>
                      Email:
                      <input type="email" value={email} onChange={cambiarEmail}/>
                    </label>
                    <input style={styles.distances} type="submit" value="Generar orden" />
                  </form>
                  </div>

    </div>

    
    
  )
}

export default Cart;
