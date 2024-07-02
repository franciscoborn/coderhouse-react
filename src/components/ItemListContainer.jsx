import React from 'react';
import ShopItemCard from './ShopItemCard';

function ItemListContainer(props) {
    const { list } = props;
    return (
        <>
            {list.map((item, index) => (
                <ShopItemCard item={item} keyItem={index}/>
            ))}
        </>
    )
};

export default ItemListContainer