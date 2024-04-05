import { createContext, useContext, useState } from "react";
import { userRegister, loginUser } from "../api/getApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const login = async (userData) => {

        const userToLogin = await loginUser(userData)
        console.log(userToLogin);
        if (userToLogin) {
            setUser(userToLogin);
            localStorage.setItem("token", userToLogin.response.token);
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
            console.error("Error al obtener carritos:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, register, userId }}>
            {children}
        </AuthContext.Provider>
    );
};



// Exporta la función useAuth
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
