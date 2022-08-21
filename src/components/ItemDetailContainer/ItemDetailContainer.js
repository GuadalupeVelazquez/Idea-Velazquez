import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore';


const ItemDetailContainer = () => {
const [item, setItem] = useState ({})
const [carga, setCarga] = useState (true)
const {id}=useParams()




  useEffect(() => {
    const querydb = getFirestore ();
    const queryDoc = doc(querydb, 'items', id  ) ;
    getDoc (queryDoc)
  
    .then(res => setItem({id: res.id, ...res.data()})) 
    setCarga(false)
    
   
  }, [id]);




  return (<>{carga ? <Loader/> :
    <ItemDetail item={item}/>
    }</>
  )
}

export default ItemDetailContainer
