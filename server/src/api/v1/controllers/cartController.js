import { getCartsByUser, 
            createCart, 
            createCartItems,
            incrementCartItems,
            decrementCartItems,
            getCarts
        } from "../models/cartModel.js";
import { handleError } from "../utils/utils.js";

const getAllCart = async (req, res) =>{
    const idUser = req.body;
    try {
        const carts = await getCarts(idUser);
        res.status(200).json({ cart : carts });
    } catch (err) {
        const errorFound = handleError(err.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }

}
const getCartUser = async (req, res) =>{
    const {id_user} = req.params;
    try {
        const cartItems = await getCartsByUser(id_user);
        return res.status(200).json({ cart : cartItems });
    } catch (err) {
        const errorFound = handleError(err.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};
//añado producto al carrito si este no existe lo creo
const addCartUser = async (req, res) => {
        const { user_id, product_id, quantity, price } = req.body
        console.log(price);
    try {
        //Consulto el carrito del usuario
        const cartUser = await getCartsByUser(user_id)
            //en caso de no tener carrito lo creo
        if (cartUser === undefined) {
            console.log(user_id);
            const newCart = await createCart(user_id);
            const cart_id = newCart.cart_id;
            console.log(cart_id);
             //agrego el producto al nuevo carrito
                const cartDetail = await createCartItems( cart_id, product_id, quantity, price );
                return res.status(201).json({ cart: cartDetail });
        } else {
            //agrego el producto al carrito en caso que exista el carro
            const {cart_id} = cartUser;
            const cartDetailItems = await createCartItems( cart_id, product_id, quantity, price );
            return res.status(201).json({ cart: cartDetailItems });
        }
    } catch (err) {
        console.log(err);
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
    }
};
// incremento el producto en el carrito ya existente
const updateCartIncrease = async (req, res) => {
    const { product_id } = req.params;
    const { detail_id, cart_id } = req.body;
    try {
        console.log(cart_id, detail_id, product_id);
        //incremento el producto en la base de datos
        const inCart = await incrementCartItems({cart_id, detail_id}, product_id);
        return res.status(201).json({ incrementCart: inCart })
    } catch (err) {
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });   
    }
}
// disminuyo el producto en el carrito ya existente
const updateCartDecrease = async (req, res) => {
    const { cart_id, detail_id, product_id } = req.body;
    try {
        //disminuyo el producto en la base de datos
        const deCart = await decrementCartItems(cart_id, detail_id, product_id);
        return res.status(201).json({ decrementCart: deCart })
    } catch (err) {
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });   
    }
}

export {
    getCartUser,
    addCartUser,
    updateCartIncrease,
    updateCartDecrease,
    getAllCart
}
