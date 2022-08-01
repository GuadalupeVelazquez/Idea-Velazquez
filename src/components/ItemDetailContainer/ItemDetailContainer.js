import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
const [item, setItem] = useState ({})
const [carga, setCarga] = useState (true)
const params=(useParams().id)-1

const traerProductos = async () => {

  const db = getFirestore();
  await getDocs(collection(db, 'items'))
      .then(snapshot => {
          const dataExtraida = snapshot.docs.map((datos) => datos.data());
          setItem(dataExtraida[params])
          setCarga(false)
      })
}

useEffect(() => {
  traerProductos()
}, []);

  return (<>{carga ? <Loader/> :
    <ItemDetail item={item}/>
    }</>
  )
}

export default ItemDetailContainer
