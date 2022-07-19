import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [item, setItem] = useState ({})
const [carga, setCarga] = useState (true)
const params=(useParams().id)-1

useEffect ( () => {
const traerProducto = new Promise ((resolve) => {
  
  setTimeout ( () => {
    resolve(productos[params])
  }, 2000)
});

traerProducto.then( res=>{
  setItem(res)
  setCarga (false)
}) 


}, [])

  return (<>{carga ? <Loader/> :
    <ItemDetail item={item}/>
    }</>
  )
}

export default ItemDetailContainer
