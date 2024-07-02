import React from 'react'
import cart_widget_image from '../assets/img/cart-widget-image.png'; 
import './CartWidget.css';

function CartWidget() {
    return (
        <>
            <button>
                <img src={cart_widget_image} alt="Icon image for shopping link" id="cart-widget-image"/>
            </button>
        </>
    )
}

export default CartWidget