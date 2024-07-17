import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function ShopItemDetail ({products}) {
    console.log(products)
    const {idShopItem} = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        const findProduct = products.find(el => el.idShopItem === parseInt(idShopItem));
        setSelectedProduct(findProduct)
        console.log(findProduct)
    }, [])

    return (
        <>
            <p> Detalle Producto {selectedProduct.idShopItem} </p>
        </>
    )
}