import React from 'react';
import Item from './Item';


const ItemList=({items}) =>{
    return (
        
        <div className='itemlist'>
            {
                items.map((producto)=>{
                    return <Item prod={producto} key={producto.id}/>
                })
            }
        </div>
        
    )
};

export default ItemList;