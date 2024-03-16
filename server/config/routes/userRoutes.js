import express from "express";

 import { createNewUser, getUsers, getUsersId, updateUsers, deleteUsers } from "../../src/api/v1/controllers/usersController.js";


/*
import { validateParametersUser } from "../../middlewares/validateParametersUser.js";
import { validateParametersLogin } from "../../middlewares/validateParametersLogin.js";
import { authToken } from "../../middlewares/authToken.js"

import { getActivity } from "../../middlewares/reports.js"; */


const router = express.Router();


router.get("/usuarios", getUsers )
router.get("/usuarios/:id", getUsersId )
router.post("/usuarios/", createNewUser )
router.put("/usuarios/:id", updateUsers )
router.delete("/usuarios/:id", deleteUsers )


export default router;