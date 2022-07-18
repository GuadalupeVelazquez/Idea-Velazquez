import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [item, setItem] = useState ({})
const params=(useParams().id)-1

useEffect ( () => {
const traerProducto = new Promise ((resolve) => {
  
  setTimeout ( () => {
    resolve(productos[params])
  }, 2000)
});

traerProducto.then( res=>setItem(res))


}, [])

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
