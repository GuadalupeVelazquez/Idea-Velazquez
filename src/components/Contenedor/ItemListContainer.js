import React, { useEffect, useState } from 'react';
import  ItemList  from './ItemList';
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const styles = {
    style : {
        textAlign : 'center',
        fontFamily: 'Verdana',
        color: '#346a99'
    }
}

const ItemListContainer = ({ textoSaludo }) => {
    const [items, setItems] = useState([])
    const [carga, setCarga] = useState(true);
    const { categoria } = useParams()

        useEffect(() => {
            const querydb = getFirestore ();
            const queryCollection = collection (querydb, 'items');
            if(categoria){
            const queryFilter = query (queryCollection, where('categoria', '==', categoria))
            getDocs (queryFilter)
            .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
            } else {
                getDocs (queryCollection)
                .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
            }
            setTimeout(()=>{setCarga(false)},1000)
            

        }, [categoria ]);

     


    return (<>{carga ? <Loader /> :
        <div className='itemListContainer'>
            <div ><h2 style={styles.style}>{textoSaludo}</h2></div>
            <ItemList items={items} />

        </div>
    }</>

    )
}

export default ItemListContainer
