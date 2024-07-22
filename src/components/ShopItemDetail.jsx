import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ShopItemDetail.css'
import ShopItemCard from "./ShopItemCard";


export default function ShopItemDetail ({products, addToCart}) {
    const {idShopItem} = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        const findProduct = products.find(el => el.idShopItem === parseInt(idShopItem));
        setSelectedProduct(findProduct)
    }, []);
    return (
        <>
            <h1> Product Detail </h1>
            <div className="divItemDescription">
                <ShopItemCard key={0} item={selectedProduct} keyItem={0} addToCart={addToCart}/>
                <h2>{selectedProduct.description}</h2>
            </div>
        </>
    )
}