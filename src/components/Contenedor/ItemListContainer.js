import React, { useEffect, useState } from 'react';
import {productos} from '../../mock/productos'
import { ItemCount } from "../ItemCount/ItemCount";
import  ItemList  from './ItemList';


const ItemListContainer = ({textoSaludo})  => {
    const [items, setItems] = useState ([])
    useEffect (() => {
        const traerProductos = new Promise ((res, rej) => {
            setTimeout (() => {
                res (productos);
            }, 2000)
        })
        traerProductos
        .then ((data) => {
            setItems(data);
        })
        .catch ((error) => {
            console.log(error);
        })

    }, []);

  

    return (
        
            <div>
                <h4>{textoSaludo}</h4>
                 <ItemCount/>
                 <ItemList items={items}/>
            </div> 
        
    )
}

export default ItemListContainer
