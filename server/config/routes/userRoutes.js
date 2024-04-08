import express from "express";

import { createNewUser, 
        getUsers, 
        getUsersId, 
        updateUsers, 
        deleteUsers,
        statusUsers } from "../../src/api/v1/controllers/usersController.js";

import { validateParametersUser } from "../../middlewares/validateParametersUser.js";

import { getActivity } from "../../middlewares/reports.js"; 
import { isLogin } from "../../middlewares/isLogin.js";


const router = express.Router();


router.get("/users", isLogin, getActivity, getUsers )
router.get("/users/:id", getActivity, getUsersId )
router.post("/users/", validateParametersUser,  getActivity, createNewUser )
router.put("/users/:id", isLogin, getActivity, updateUsers )
router.delete("/users/:id", isLogin, getActivity, deleteUsers )
router.put("/users/status/:id", isLogin, getActivity, statusUsers )


export default router;