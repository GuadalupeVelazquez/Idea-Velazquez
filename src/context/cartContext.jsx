import { createContext, useState } from "react";
import React from 'react';
import { useEffect } from "react";



export const CartContext = createContext ();

const Provider = (props) => {
    const [cart, setCart] = useState ([])

    useEffect ( () =>{
        console.log(cart)
    }, [cart])

    const addToCart = (item,cantidad) => {


        if (isInCart(item.id) ){
            // console.log("ya esta en el carrito")
        } else{
            setCart([...cart, {...item,cantidad}]);
        }


    };

    const isInCart = (id) =>{
        return cart.some (prod => prod.id === id)
    }

    return( 
        <CartContext.Provider value={{cart,addToCart}}>
            {props.children}
        </CartContext.Provider>)
    
};

export default Provider;
