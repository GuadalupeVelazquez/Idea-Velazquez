import React from 'react';
import { useState } from 'react';



export const ItemCount = () => {
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