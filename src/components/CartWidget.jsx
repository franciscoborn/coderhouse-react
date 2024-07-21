import React from 'react'
import cart_widget_image from '../assets/img/cart-widget-image.png'; 
import './CartWidget.css';

function CartWidget({cartItems}) {
    const nCartItems = cartItems.length
    
    return (
        <>
            <button>
                <img src={cart_widget_image} alt="Icon image for shopping link" id="cart-widget-image"/>
            </button>
            {nCartItems !== 0 && (
                <div id="count-cart-items">{nCartItems}</div>
            )}
        </>
    )
}

export default CartWidget