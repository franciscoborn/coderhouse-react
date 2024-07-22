import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ShopItemDetail from './components/ShopItemDetail'
import FetchData from './FetchData'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    FetchData()
    .then(response =>
      setShopItems(response)
    )
    .catch(err => console.error(err))
  }, []);

  const addToCart = (item, bundle = false) => {
    if (cartItems.length < 20) {
      if (bundle) {
        const itemResume = { ...item }
        itemResume.name = `Bundle - ${item.bundle[0]}x ${item.name}`
        itemResume.cost = `${item.cost * item.bundle[0] * item.bundle[1]}`
        setCartItems([...cartItems, itemResume]);
      }
      else {
        setCartItems([...cartItems, item]);
      }
    }
    else {
      alert("Too many items in the cart.")
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <BrowserRouter basename='/coderhouse-react'> 
        <NavBar cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<h1> Welcome to Mini Mage!! </h1>} />
          <Route path="/news" element={<h2> News is under construction </h2>} />
          <Route path="/game-guides" element={<h2> Game Guides is under construction </h2>} />
          <Route path="/forum" element={<h2> Forum is under construction </h2>} />
          <Route path="/support" element={<h2> Support is under construction </h2>} />
          <Route path="/shop" element={<ItemListContainer list={shopItems} addToCart={addToCart}/>} />
          <Route path="/shop/:idShopItem" element={<ShopItemDetail products={shopItems} addToCart={addToCart}/>} /> 
          <Route path="/shop-cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="*" element={<h1> ERROR 404: URL Not Found </h1>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
