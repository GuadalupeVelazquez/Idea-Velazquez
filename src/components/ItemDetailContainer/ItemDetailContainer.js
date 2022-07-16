import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { productos } from '../../mock/productos'

const ItemDetailContainer = () => {
const [item, setItem] = useState ([])

useEffect ( () => {
const traerProducto = new Promise ((res, rej) => {
  setTimeout ( () => {
    res(productos[1])
  }, 2000)
});

traerProducto
.then( (data) => {
setItem(data)
})


}, [])

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
