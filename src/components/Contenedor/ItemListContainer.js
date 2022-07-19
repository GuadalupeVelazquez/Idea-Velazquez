import React, { useEffect, useState } from 'react';
import {productos} from '../../mock/productos'
import  ItemList  from './ItemList';
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom';

const styles = {
    style : {
        textAlign : 'center',
        fontFamily: 'Verdana',
        color: '#346a99'
    }
}

const ItemListContainer = ({textoSaludo})  => {
    const [items, setItems] = useState ([])
    const [carga, setCarga] = useState (true)
    const {categoria} = useParams ()
    

    useEffect (() => {
        const traerProductos = new Promise ((res, rej) => {
            setCarga(true)
            setTimeout (() => {
                res (categoria ? productos.filter(obj => obj.categoria === categoria): productos)
                console.log(categoria)
            }, 1000)
        })
        traerProductos
        .then ((data) => {
            setItems(data);
            setCarga (false)
        })
        .catch ((error) => {
            console.log(error);
        })

    }, [categoria]);
    

    return (<>{carga ? <Loader/> :
            <div className='itemListContainer'>
                <div ><h2 style={styles.style}>{textoSaludo}</h2></div>
                 <ItemList items={items}/>
                 
            </div> 
            }</>
        
    )
}

export default ItemListContainer
