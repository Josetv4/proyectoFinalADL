export const increaseProduct = (product, cart, total, setTotal, setCart) => {

    const addQuantity = cart.map(item => {
        if (item.id === product.id){
            setTotal(item.price + total);
            return { ...item, 
                        quantity: ((item.quantity || 0)) + 1
            }
        }
        return item
    });
    setCart(addQuantity)
}

export const decreaseProduct = (product, cart, total, setTotal, setCart) => {

    const addQuantity = cart.map(item => {
        if (item.id === product.id){
            setTotal(total - item.price);
            return { ...item, 
                        quantity: ((item.quantity || 0)) - 1 
            }
        }
        return item
    });
    
    
    setCart(addQuantity)
}