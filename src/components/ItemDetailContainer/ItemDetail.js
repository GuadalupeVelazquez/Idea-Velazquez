
import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import { useState } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from '../../context/cartContext';
import Loader from '../Loader/Loader';


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
   
  colorTitulos :{
    color: 'rgba(24, 24, 26, 0.82)'
  }, 

  distances : {
    margin:'5px',
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

function ItemDetail(item) {

  const [cantidad,setCantidad] = useState (0);

  const {addToCart} = useContext (CartContext);

  const [carga, setCarga] = useState(true);

  const onAdd = (cantidad) => {
    setCantidad (cantidad)
    addToCart(item,cantidad)
    
  };
    setTimeout(()=>{setCarga(false)},1000)
    const productoActual = item.item
    return (carga ? <Loader/> :
      <div style={styles.style}>  
        <h1 style={styles.colorTitulos}>{productoActual.nombre}</h1>
        <img src={productoActual.image} alt='' />
        <p>{productoActual.description}</p>
        <h1 style={styles.colorTitulos}>${productoActual.precio}</h1>
        {cantidad === 0 ? (<ItemCount onAdd={onAdd}/>)

        : (<Link to='/cart' style={styles.distances}>Ir al carrito</Link>)}
       
        
      </div>
    )
}

export default ItemDetail