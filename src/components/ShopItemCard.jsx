import React from 'react'

function ShopItemCard(props) {
    const item = props.item
    console.log(props);
    return (
        <div className="shop-item" key={props.keyItem}>
            <img src={`${"../../img/shop-items/"}${item.image_src}`} />
            <h2>{item.name}</h2>
            <div>
                <button className="shop-item-button"> $ {item.cost} </button>
                <button className="shop-item-button-bundle">10x $ {item.cost * 0.9} </button>
            </div>
        </div>
    )
};

export default ShopItemCard