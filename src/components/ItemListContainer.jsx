import React, {useState} from 'react';
import ShopItemCard from './ShopItemCard';
import './ItemListContainer.css'

function ItemListContainer({list, addToCart}) {
    const [filterState, setFilterState] = useState('all');
    function filterItems (items, filterState) {
        let itemsFiltered = 
            filterState === 'all'
                ? items
                : items.filter((task) => {
                    return task.type === filterState
                })
        return itemsFiltered
    }

    const handleFilter = (e) => {
        setFilterState(e.target.value);
    };

    const items = filterItems(list, filterState)
    return (
        <>
        <div id="select-container">
            <label htmlFor="filter"> Filtrar por estado: </label>
            <select onChange={handleFilter} value={filterState}>
                <option value="all">All</option>
                <option value="potion">Potion</option>
                <option value="weapon">Weapon</option>
                <option value="armor">Armor</option>
            </select>
        </div>
        <div className="shop-items-container">
            {items.map((item, index) => (
                <ShopItemCard key={index} item={item} keyItem={index} addToCart={addToCart}/>
            ))}
        </div>
        </>
    )
};

export default ItemListContainer