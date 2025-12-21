import React, { createContext, useContext, useState } from 'react';

type UserRole = 'USER' | 'ADMIN';

type AuthContextType = {
  isLoggedIn: boolean;
  role: UserRole | null;
  loginAsUser: () => void;
  loginAsAdmin: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);

  const loginAsUser = () => {
    setIsLoggedIn(true);
    setRole('USER');
  };

  const loginAsAdmin = () => {
    setIsLoggedIn(true);
    setRole('ADMIN');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        role,
        loginAsUser,
        loginAsAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }
  return context;
}
