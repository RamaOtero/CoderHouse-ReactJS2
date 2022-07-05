import React from 'react';
import "../../App.css";
import ItemList from './ItemList/ItemList.js';
import { useState } from "react";
import { productList } from '../Products/products'

const ItemListContainer = ({greetings}) => {
  const [items, setItems] = useState([]);

    const data = new Promise((resolve, reject) => {
        resolve(productList)
    });

    data.then((data) => {
        setItems(data)
    });

    data.catch((error) => {
        console.error(error)
    });

  return (
    <div className='ItemListContainer__Span'>
        <span>
            New Arrival | {greetings}
        </span>
            <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer