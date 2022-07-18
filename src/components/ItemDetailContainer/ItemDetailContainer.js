import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'

const ItemDetailContainer = ({}) => {
const [item, setItem] = useState ({})

useEffect ( () => {
const traerProducto = new Promise ((resolve) => {
  setTimeout ( () => {
    resolve(productos)
  }, 2000)
});

traerProducto.then( res=>setItem(res))


}, [])

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
