
import React from 'react'
import Item from './Item'

const style = {
  contenedorStyle :{
    display: 'flex',
  }
} 

 const ItemList = ({items}) => {
  return (
    <div className='itemList' style={style.contenedorStyle}>
    {
        items.map ((item, ) => (
            <Item item={item} key={item.id}/>
        ))
    }
    </div>
  )
}

export default ItemList;
