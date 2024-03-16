import express from "express";

 import { createNewUser, getUsers, getUsersId, updateUsers, deleteUsers } from "../../src/api/v1/controllers/usersController.js";


/*
import { validateParametersUser } from "../../middlewares/validateParametersUser.js";
import { validateParametersLogin } from "../../middlewares/validateParametersLogin.js";
import { authToken } from "../../middlewares/authToken.js"
*/
import { getActivity } from "../../middlewares/reports.js"; 


const router = express.Router();


router.get("/users", getActivity, getUsers )
router.get("/users/:id", getActivity, getUsersId )
router.post("/users/", getActivity, createNewUser )
router.put("/users/:id", getActivity, updateUsers )
router.delete("/users/:id", getActivity, deleteUsers )


export default router;