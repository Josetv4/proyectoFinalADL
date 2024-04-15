import { createContext, useContext, useState } from "react";
import { userRegister, loginUser } from "../api/getApi.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);


    const login = async (userData) => {
        const { response } = await loginUser(userData)
       
        if (!Array.isArray(response)) {
            setUser(response.user);
            const userID = response["user"]["user_id"]
            setUserId(userID)
            localStorage.setItem("token", response.token);
        } else {
            throw new Error("Credenciales inválidas");
        }
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    const register = async (userData) => {
        try {
            const response = await userRegister(userData);
            setUserId(response.id);
        } catch (error) {
            console.error("Error al registrar el usuario", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, register, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
