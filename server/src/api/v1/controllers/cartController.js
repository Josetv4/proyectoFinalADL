import { handleError } from "../utils/utils.js";

const getCartUser = async (req, res) =>{
    const idUser = req.params;
    try {
        const cartItems = await getCart(idUser);
        res.status(200).json({ cart : cartItems });
    } catch (error) {
        const errorFound = handleError(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};

const addCartUser = async (req, res) => {
    const idUser = req.params;
    try {
        const product = req.body
        const cartProduct = await addProductCart( idUser, product );
        res.status(201).json({ cart: cartProduct });
    } catch (err) {
        const errorFound = handleError(err.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
    }
};

export {
    getCartUser,
    addCartUser
}