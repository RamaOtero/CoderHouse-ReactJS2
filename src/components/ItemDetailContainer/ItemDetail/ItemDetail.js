import '../../../App.css';
 /* import Counter from './itemCount2'; */
import * as React from 'react';


const ItemDetail = ( {produ} ) => {
    return (
        <div className="containerDetail">
            <div>
                <img src={produ.image} alt={produ.name} className="containerDetail__img" />
            </div>
            <div className="containerDetail__info">
                <h3>{produ.name}</h3>
                <h4>${produ.price}</h4>
                <h5>{produ.info}</h5>
            </div>
        </div>
    )
}

export default ItemDetail