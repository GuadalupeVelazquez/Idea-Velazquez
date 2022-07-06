import React from 'react';
import { ItemCount } from "../ItemCount/ItemCount";

const ItemListContainer = ({textoSaludo})  => {

    return (
        <>
            <div>
                <h4>{textoSaludo}</h4>
                <ItemCount/>
            </div>
        </>
    )
}

export default ItemListContainer
