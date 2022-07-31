import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext'

export const CartWidget = () => {
    const styles={
        containter:{
            display:"flex",
        },
        counter:{
            color: "black",
            margin:"3px",
            padding:"5px",
            borderRadius:"30% 10% 50% 50%",
            backgroundColor:"white",
            fontSize:"14px",
            width:"12px",
            height:"12px",
            paddingLeft:"8px"
        },

        carrito:{
            
            color:"white",
        }
    }


    const {cart} = useContext (CartContext);
    let cant =0;
    for (let i = 0; i < cart.length; i++) {
        cant=cant+cart[i].cantidad
    }

    return(
        <div style={styles.containter}>
            <span style={styles.counter}>{cant}</span>  
            <Link style={styles.carrito} to= '/cart'> <ShoppingCartIcon/></Link>
        </div>    
    )
};

export default CartWidget

