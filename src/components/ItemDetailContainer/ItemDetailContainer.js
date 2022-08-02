import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore';


const ItemDetailContainer = () => {
const [item, setItem] = useState ({})
const [carga, setCarga] = useState (true)
const {params}=(useParams().id)-1
// const {params}=useParams();

// const traerProductos = async () => {

  useEffect(() => {
    const querydb = getFirestore ();
    const queryDoc = doc(querydb, 'items', '28fWOmBAB6zsHDy5EOE9'  ) ;
    getDoc (queryDoc)
    .then(res => setItem({id: res.id, ...res.data()})) 
    setCarga(false)
    
   
  }, []);


  // const db = getFirestore();
  // await getDocs(collection(db, 'items'))
  //     .then(snapshot => {
  //         const dataExtraida = snapshot.docs.map((datos) => datos.data());
  //         setItem(dataExtraida[params])
  //         setCarga(false)
  //     })


  
// }


// useEffect(() => {

//   traerProductos()
// }, []);


  return (<>{carga ? <Loader/> :
    <ItemDetail item={item}/>
    }</>
  )
}

export default ItemDetailContainer
