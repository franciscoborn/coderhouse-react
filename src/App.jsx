import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const itemList = [
    { name: 'Red potion', cost: 10, image_src: "potion-red.jpg" },
    { name: 'Green potion', cost: 50, image_src: "potion-green.jpg" },
    { name: 'Blue potion', cost: 30, image_src: "potion-blue.jpg" },
    { name: 'Yellow potion', cost: 30, image_src: "potion-yellow.jpg" },
  ];

  return (
    <>
      <NavBar />
      <ItemListContainer list={itemList} />
    </>
  )
}

export default App
