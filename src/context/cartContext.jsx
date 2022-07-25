import { createContext } from "react";

export const CartContext = createContext ()

const Provider = () => {
    return 
        <CartContext.Provider></CartContext.Provider>;
    
};

export default Provider
