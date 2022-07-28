import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import React from 'react';

export const CartWidget = () => {
    return(
        <div>

    <Link to= '/cart'> <ShoppingCartIcon/></Link>
            
        </div>    
    )
};

export default CartWidget

