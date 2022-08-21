import React from 'react';
import { useState } from 'react';

const styles = {
    distance :{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        margin:'3px',
        
      },
      distances : {
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

     
      
}


export const ItemCount = ({onAdd}) => {
 const stock=10;
   const [numero, setNumero] = useState (0);
   const incrementar = () => {
    if (numero<stock){
        setNumero (numero +1);
    }else{setNumero("Se acabo el stock")}
   };
   const decrementar = () => {
    if (numero>0){
        setNumero (numero -1);
    }else if(isNaN(numero)){
        setNumero (stock);}
  };
    return (
    <div style={styles.distance} >
    
    <div>
       <button style={styles.distances} onClick={incrementar} >Agregar</button> 
    </div>
    <h2>{numero}</h2>
    <div >
       <button style={styles.distances} onClick={decrementar}>Quitar</button> 
       
    </div>

      <div >

        <button style={styles.distances} onClick={()=>onAdd(numero)}>Agregar al carrito</button>
      </div>

    </div>
 )   
 
};

  

export default ItemCount