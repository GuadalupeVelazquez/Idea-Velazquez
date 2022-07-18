import React, { useEffect, useState } from 'react';
import {productos} from '../../mock/productos'
import { ItemCount } from "../ItemCount/ItemCount";
import  ItemList  from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({textoSaludo})  => {
    const [items, setItems] = useState ([])
    const {categoria} = useParams ()
    

    useEffect (() => {
        const traerProductos = new Promise ((res, rej) => {
            setTimeout (() => {
                // res (productos);
                res (categoria ? productos.filter(obj => obj.categoria = categoria): productos)
                console.log(categoria)
            }, 1000)
        })
        traerProductos
        .then ((data) => {
            setItems(data);
        })
        .catch ((error) => {
            console.log(error);
        })

    }, [categoria]);
    

    return (
        
            <div className='itemListContainer'>
                <h4>{textoSaludo}</h4>
                 <ItemCount/>
                 <ItemList items={items}/>
            </div> 
        
    )
}

export default ItemListContainer
