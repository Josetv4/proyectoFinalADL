import express from "express";

import { createNewUser, 
        getUsers, 
        getUsersId, 
        updateUsers, 
        deleteUsers } from "../../src/api/v1/controllers/usersController.js";

import { validateParametersUser } from "../../middlewares/validateParametersUser.js";

import { getActivity } from "../../middlewares/reports.js"; 


const router = express.Router();


router.get("/users", getActivity, getUsers )
router.get("/users/:id", getActivity, getUsersId )
router.post("/users/", validateParametersUser,  getActivity, createNewUser )
router.put("/users/:id", getActivity, updateUsers )
router.delete("/users/:id", getActivity, deleteUsers )


export default router;