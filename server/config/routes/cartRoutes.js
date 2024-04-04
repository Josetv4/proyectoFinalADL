import express from "express";

import {
        getCartUser,
        addCartUser
} from "../../src/api/v1/controllers/cartController.js";
import { getActivity } from "../../middlewares/reports.js";

const router = express.Router();

router.get("/cart/:idUser", getActivity, getCartUser);
router.post("/cart/:idUser", getActivity, addCartUser)
