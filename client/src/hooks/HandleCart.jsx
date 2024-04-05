export const increaseProduct = (productID, cartItems, setCartItems) => {

    const addQuantity = cartItems.map(item => {
        if (item.id === productID){
            // setTotal(item.price + total);
            return { ...item, 
                        quantity: ((item.quantity || 0)) + 1
            }
        }
        return item
    });
    setCartItems(addQuantity)
}

export const decreaseProduct = (productID, cartItems, setCartItems) => {

    const addQuantity = cartItems.map(item => {
        if (item.id === productID){
            // setTotal(total - item.price);
            return { ...item, 
                        quantity: ((item.quantity || 0)) - 1 
            }
        }
        return item
    });
    
    
    setCartItems(addQuantity)
}