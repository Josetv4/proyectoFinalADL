import express from "express";
import { getActivity } from "../../middlewares/reports";
import { loginUser } from "../../src/api/v1/controllers/loginController.js";
import { validateParametersLogin } from "../../middlewares/validateParameterLogin";


export const router = express.Router();

router.post('/login/', validateParametersLogin, getActivity, loginUser )
