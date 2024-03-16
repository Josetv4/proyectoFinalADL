import { getUser, getUserId, createUser, updateUser, deleteUser } from "../models/userModel.js";

const getUsers = async (req, res) => {
  try {
    const users = await getUser();
    res.status(200).json({ user : users });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUsersId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const users = await getUserId(id);
    res.status(200).json({ user : users  });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createNewUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUsers = async (req, res) => {
  
  const id = req.params;
  const user = req.body;
  try {
    
    const userUpdate = await updateUser(id, user);
    res.status(201).json({ user: userUpdate });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteUsers = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteUser(id);
    res.status(200).json({ message: 'Usuario eliminado correctamente', user: response });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export {  getUsers, 
          getUsersId, 
          createNewUser,
          updateUsers,
          deleteUsers }