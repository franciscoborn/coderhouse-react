import React from 'react'
import './ShopItemCard.css'
import { Link } from 'react-router-dom';

function ShopItemCard({item, keyItem, addToCart}) {
    return (
        <div className="shop-item" key={keyItem}>
            <Link to={`/shop/${item.idShopItem}`}>
                <img className="shopItemImage" src={`${import.meta.env.BASE_URL}img/shop-items/${item.image_src}`} />
                <h2>{item.name}</h2>
            </Link>
            <div>
                <button className="shop-item-button" onClick={() => addToCart(item)}> ${item.cost} </button>
                {item.bundle && item.bundle.length !== 0 &&
                (<button className="shop-item-button-bundle" onClick={() => addToCart(item, true)}> ${item.bundle[0]}x ${item.cost * item.bundle[0] * item.bundle[1]} </button>)}
            </div>
            
        </div>
    )
};

export default ShopItemCard