import { getUser, getUserId, createUser, updateUser, deleteUser, statusUser } from "../models/userModel.js";

import { handleError } from "../utils/utils.js";

const getUsers = async (req, res) => {
  try {
    const users = await getUser();
    res.status(200).json({ user : users });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getUsersId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const users = await getUserId(id);
    res.status(200).json({ user : users  });
  } catch (error) {
    const errorFound = handleError(error.code) || [{ status: 500, message: "Error interno del servidor" },];
    return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });
  }
};

const createNewUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.log("error createNewUser: ",error)
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const updateUsers = async (req, res) => {
  
  const id = req.params;
  const user = req.body;
  try {
    
    const userUpdate = await updateUser(id, user);
    res.status(200).json({ user: userUpdate });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const deleteUsers = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteUser(id);
    res.status(200).json({ message: 'Usuario eliminado correctamente', user: response });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const statusUsers = async (req, res) => {
  
  const { id } = req.params;
  const { status } = req.body
  try {
    const response = await statusUser(id, status);
    res.status(200).json({ message: 'usuario actualizado correctamente', user: response });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {  getUsers, 
          getUsersId, 
          createNewUser,
          updateUsers,
          deleteUsers,
          statusUsers, }