import React from 'react';
import { useState } from 'react';



export const ItemCount = () => {
 const stock=20;
 const [numero, setNumero] = useState (0);
   const incrementar = () => {
     setNumero (numero +1);
   };
   const decrementar = () => {
    setNumero (numero -1);
  };
  
  
    return (
        // {(numero < stock) ?(<ItemCount numero = {numero} />) : (<h4>Se acabo el stock </h4>)}
  
    <div>
    
    <div>
       <button onClick={incrementar} >Sumar</button> 
    </div>
    <h2>{numero}</h2>
    <div>
       <button onClick={decrementar}>Restar</button> 
    </div>
    </div>
 )   
 
};

  

export default ItemCount