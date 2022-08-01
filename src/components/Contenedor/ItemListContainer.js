import React, { useEffect, useState } from 'react';
import {productos} from '../../mock/productos'
import  ItemList  from './ItemList';
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

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
    
    const traerProductos = async () => {

        const db = await getFirestore ();
        getDocs (collection(db, 'items'))
        .then(snapshot =>{
            const dataExtraida = snapshot.docs.map (datos => datos.data())
            console.log(dataExtraida)
            setItems(dataExtraida)
        })
    }


    useEffect (() => {
        traerProductos()
        // const traerProductos = new Promise ((res, rej) => {
        //     setCarga(true)
        //     setTimeout (() => {
        //         res (categoria ? productos.filter(obj => obj.categoria === categoria): productos)
        //     }, 1000)
        // })

        // traerProductos
        // .then ((data) => {
        //     setItems(data);
        //     setCarga (false)
        // })
        // .catch ((error) => {
        //     console.log(error);
        // })

    // }, [traerProductos]);

    }, []);
    

    return (<>{carga ? <Loader/> :
            <div className='itemListContainer'>
                <div ><h2 style={styles.style}>{textoSaludo}</h2></div>
                 <ItemList items={items}/>
                 
            </div> 
            }</>
        
    )
}

export default ItemListContainer
