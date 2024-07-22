import "./Cart.css"


const Cart = ({ cartItems, setCartItems }) => {
    return (
        <div id="body-cart">
            <h2>Cart</h2>
            <button id="btn-empty-cart" onClick={() => setCartItems([])}> Empty Cart </button>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
                ) : (
                <ul id="cart-container">
                    <li key={0}>
                        <div className="col-title-cart">Item Name</div>
                        <div className="col-title-cart">Item Cost</div>
                    </li>
                {cartItems.map((item, index) => (
                    <li key={index + 1}>
                        <div>{item.name}</div>
                        <div>{item.cost}</div>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
};

export default Cart
