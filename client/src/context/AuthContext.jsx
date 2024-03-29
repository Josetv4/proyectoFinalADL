import { createContext, useContext, useEffect, useState } from "react";
import usersData from "../components/json/userData.json";
import { userRegister } from "../api/getApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const userFromToken = Object.values(usersData).find(user => user.token === token);
            if (userFromToken) {
                setUser(userFromToken);
            }
        }
    }, []);

    const login = async (credentials) => {
        const userToLogin = Object.values(usersData).find(user =>
            user.email === credentials.email && user.password === credentials.password
        );
        if (userToLogin) {
            setUser(userToLogin);
            sessionStorage.setItem("token", userToLogin.token);
        } else {
            throw new Error("Credenciales inválidas");
        }
    };

    const logout = async () => {
        setUser(null);
        sessionStorage.removeItem("token");
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
