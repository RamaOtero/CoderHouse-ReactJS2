import React from "react";
import Item from "./Item/Item";
import '../../../App.css';
import { Link } from "react-router-dom";
import {productList} from "../../Products/products"

const ItemList = ({ items }) => {
    return(
        <div className="item-list">
            {productList.map((productList) => {
                return (
                    <Link to={`/item/${productList.id}`}>
                    <Item key={productList.id} item={productList} />
                    </Link>
                )})}
        </div>
 )}

export default ItemList;