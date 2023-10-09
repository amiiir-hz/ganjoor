"use client";
import React, {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
  ReactNode,
  Dispatch,
} from "react";
import { authReducer } from "../reducers/AuthReducer";

// Define the types for your context value
interface AuthContextProps {
  isLogin: boolean;
  loginDispatch: Dispatch<any>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, loginDispatch] = useReducer(authReducer, false);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        loginDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
