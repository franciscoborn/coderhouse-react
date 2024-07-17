import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ShopItemDetail from './components/ShopItemDetail'
import FetchData from './FetchData'

function App() {
  const [shopItems, setShopItems] = useState([]);
  useEffect(() => {
    FetchData()
    .then(response =>
      setShopItems(response)
    )
    .catch(err => console.error(err))
  }, []);

  return (
    <>
      <BrowserRouter basename='/coderhouse-react'> 
        <NavBar />
        <Routes>
          <Route path="/" element={<h1> Welcome to Mini Mage!! </h1>} />
          <Route path="/news" element={<h2> News is under construction </h2>} />
          <Route path="/game-guides" element={<h2> Game Guides is under construction </h2>} />
          <Route path="/forum" element={<h2> Forum is under construction </h2>} />
          <Route path="/support" element={<h2> Support is under construction </h2>} />
          <Route path="/shop" element={<ItemListContainer list={shopItems} />} />
          {/* Usar useParams para leer el idSHopItem, usar useEffect*/}
          <Route path="/shop/:idShopItem" element={<ShopItemDetail products={shopItems} />} /> 
          <Route path="*" element={<p> Not Found </p>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
