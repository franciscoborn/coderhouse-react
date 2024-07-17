import React from 'react'
import './ShopItemCard.css'
import { Link } from 'react-router-dom';

function ShopItemCard(props) {
    const item = props.item
    console.log(item)
    return (
        <div className="shop-item" key={props.keyItem}>
            <img src={`${import.meta.env.BASE_URL}img/shop-items/${item.image_src}`} />
            <h2>{item.name}</h2>
            <div>
                <button className="shop-item-button"> ${item.cost} </button>
                <button className="shop-item-button-bundle">10x ${item.cost * 9} </button>
                <Link to={`/shop/${item.idShopItem}`}> <button> Check Detail {item.idShopItem} </button> </Link>
            </div>
        </div>
    )
};

export default ShopItemCard