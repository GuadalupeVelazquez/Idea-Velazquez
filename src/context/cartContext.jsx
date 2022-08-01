import { createContext, useState } from "react";
import React from 'react';
import { useEffect } from "react";



export const CartContext = createContext ();

const Provider = (props) => {
    const [cart, setCart] = useState ([])
    useEffect ( () =>{
        // console.log(cart)
    }, [cart])
    const addToCart = (item,cantidad) => {
         if (isInCart(item.item.id) ){
              alert("ya esta en el carrito")
         } else{
             setCart([...cart, {...item,cantidad}]);
         }
        setCart([...cart, {...item,cantidad}]);

        
    };
    
   

    const isInCart = (id) =>{
        return cart.some (prod => prod.item.id === id)
    }
    
    const deleteAll = () => {
        setCart ([])
    }

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter ((prod) => prod.item.id !== id)
        setCart(productosFiltrados)
        
    }

    

    return( 
        <CartContext.Provider value={{cart,addToCart,deleteAll,deleteOne}}>
            {props.children}
        </CartContext.Provider>)
    
};

export default Provider;
