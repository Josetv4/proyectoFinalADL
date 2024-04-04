import { getCartsByUser, 
            createCart, 
            createCartItems,
            incrementCartItems,
            decrementCartItems,
            getCarts
        } from "../models/cartModel.js";
import { handleError } from "../utils/utils.js";

const getAllCart = async () =>{
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
    const idUser = req.body;
    try {
        const cartItems = await getCartsByUser(idUser);
        res.status(200).json({ cart : cartItems });
    } catch (err) {
        const errorFound = handleError(err.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};
//añado producto al carrito si este no existe lo creo
const addCartUser = async (req, res) => {
        const { userID, product, quantity, price } = req.body
    try {
        //Consulto el carrito del usuario
        const cartUser = await getCartsByUser(userID)
            //en caso de no tener carrito lo creo
        if (cartUser !== 0) {
            const newCart = createCart(userID);
             //agrego el producto al nuevo carrito
                const cartDetail = await createCartItems( newCart, product, quantity, price );
            return res.status(201).json({ cart: cartDetail });
        }
        //agrego el producto al carrito en caso que exista el carro
        const cartDetail = await createCartItems( cartUser, product, quantity, price );
        res.status(201).json({ cart: cartDetail });

    } catch (err) {
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
    }
};
// incremento el producto en el carrito ya existente
const updateCartIncrease = async (req, res) => {
    const { cartID } = req.params;
    const {detailID} = req.body;
    try {
        //incremento el producto en la base de datos
        const inCart = await incrementCartItems(cartID, detailID);
    res.status(201).json({ incrementCart: inCart })
    } catch (err) {
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });   
    }
}
// disminuyo el producto en el carrito ya existente
const updateCartDecrease = async (req, res) => {
    const { cartID } = req.params;
    const {detailID} = req.body;
    try {
        //disminuyo el producto en la base de datos
        const deCart = await decrementCartItems(cartID, detailID);
    res.status(201).json({ decrementCart: deCart })
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