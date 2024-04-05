export const addProductCart  = ( product, cartItems ) =>{

    const cart = [...cartItems]
    const existsProduct = cart.findIndex(item => item.id === product.id)

    if (existsProduct !== -1) {
        cart[existsProduct].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    return cart;
}