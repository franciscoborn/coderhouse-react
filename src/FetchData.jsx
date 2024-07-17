
function FetchData () {
    const itemList = [
        { name: 'Red potion', cost: 10, image_src: "potion-red.jpg", idShopItem: 1 },
        { name: 'Green potion', cost: 50, image_src: "potion-green.jpg", idShopItem: 2 },
        { name: 'Blue potion', cost: 30, image_src: "potion-blue.jpg", idShopItem: 3 },
        { name: 'Yellow potion', cost: 30, image_src: "potion-yellow.jpg", idShopItem: 4 },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(itemList)
        }, 100)
    });

}

export default FetchData;