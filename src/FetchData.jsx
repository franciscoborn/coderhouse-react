
function FetchData () {
    const itemList = [
        { name: 'Red Potion', cost: 10, image_src: "potion-red.jpg", idShopItem: 1, type:"potion", description: "Potion that healths up to 50 hp.", bundle: [5, 0.9] },
        { name: 'Green Potion', cost: 25, image_src: "potion-green.jpg", idShopItem: 2, type:"potion", description: "Potion that healths up to 100 hp.", bundle: [5, 0.9] },
        { name: 'Blue Potion', cost: 50, image_src: "potion-blue.jpg", idShopItem: 3, type:"potion", description: "Potion that healths up to 175 hp.", bundle: [10, 0.9] },
        { name: 'Yellow Potion', cost: 100, image_src: "potion-yellow.jpg", idShopItem: 4, type:"potion", description: "Potion that healths up to 300 hp.", bundle: [10, 0.9] },
        { name: 'Fire Staff', cost: 3000, image_src: "fire-staff.jpg", idShopItem: 5, type:"weapon", description: "Fire Staff.", bundle: [] },
        { name: 'Water Staff', cost: 3000, image_src: "water-staff.jpg", idShopItem: 6, type:"weapon", description: "Water Staff.", bundle: [] },
        { name: 'Double Axe', cost: 3000, image_src: "double-axe.jpg", idShopItem: 7, type:"weapon", description: "Double Axe.", bundle: [] },
        { name: 'Old Axe', cost: 1000, image_src: "old double-axe.jpg", idShopItem: 8, type:"weapon", description: "Old Double Axe.", bundle: [] },
        { name: 'Armor', cost: 800, image_src: "armor.jpg", idShopItem: 9, type:"armor", description: "Armor.", bundle: [] },
        { name: 'Tunic', cost: 800, image_src: "tunic.jpg", idShopItem: 10, type:"armor", description: "Tunic.", bundle: [] },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(itemList)
        }, 1500)
    });

}

export default FetchData;