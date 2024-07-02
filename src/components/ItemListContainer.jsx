import React from 'react';
import ShopItemCard from './ShopItemCard';
import './ItemListContainer.css'

function ItemListContainer(props) {
    const { list } = props;
    return (
        <div className="shop-items-container">
            {list.map((item, index) => (
                <ShopItemCard item={item} keyItem={index}/>
            ))}
        </div>
    )
};

export default ItemListContainer