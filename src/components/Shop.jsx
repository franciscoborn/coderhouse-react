import { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import FetchData from "../FetchData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Shop () {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {
        FetchData()
        .then(response =>
            setShopItems(response)
        )
        .catch(err => console.error(err))
    }, []);
    {/* Usar useParams para leer el idSHopItem, usar useEffect*/}
    // <Route path="/shop/:idShopItem" element={<ShopItemDetail products={shopItems} />} /> 

    return (
        <>
            <BrowserRouter basename="/shop">
                <Routes>
                    <Route path="/" element={<ItemListContainer list={shopItems} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Shop;