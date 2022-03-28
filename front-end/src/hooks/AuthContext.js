import React, { createContext, useCallback, useState, useContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [logedUser, setLogedUser] = useState(() => {
    const user = localStorage.getItem("@PdmProject:user");

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signin = useCallback(async (email, password) => {
    try {
     /**LÓGICA PARA SE CADASTRAR */
      const user = //metodo para criar
      localStorage.setItem("@PdmProject:user", JSON.stringify(user));
      setLogedUser({ user });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    try {
           /**LÓGICA PARA LOGIN */

           const user = //lógica login

      localStorage.setItem("@PdmProject:user", JSON.stringify(user));
      setLogedUser({ user });
    } catch (err) {
      console.log(err);
      window.alert("Senha ou email incorretos!");
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signin,
        user: logedUser.user ,
        login,
        setLogedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };