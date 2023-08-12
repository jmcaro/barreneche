import { createContext, useState, useContext } from "react";
import { registerUser } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error ("useAuth no puede ser usado sin contexto");
  }
  return context;
}


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticaded] = useState(false);

  const signup = async (user) => {
    try {
        const res = await registerUser(user);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticaded(true)
    } catch (error) {
        res.status(500).json(error)
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
