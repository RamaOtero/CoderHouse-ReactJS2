import React from "react";
import Item from "./Item/Item";
import '../../../App.css';
import {productList} from "../../Products/products"

const ItemList = ({ items }) => {
    return(
        <div className="item-list">
            {productList.map((productList) => {
                return (
                <Item key={productList.id} item={productList} />
                )})}
        </div>
 )}

export default ItemList;