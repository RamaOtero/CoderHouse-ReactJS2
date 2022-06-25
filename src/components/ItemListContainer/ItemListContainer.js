import React from 'react';
import "../../App.css";

const ItemListContainer = ({greetings}) => {
  return (
    <div className='ItemListContainer__Span'>
        <span>
            New Arrival | {greetings}
        </span>
    </div>
  )
}

export default ItemListContainer