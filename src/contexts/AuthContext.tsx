
import React, { createContext, useContext, useState } from 'react';
import { useCart } from './CartContext';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { mergeGuestCart } = useCart();

  const login = async (email: string, password: string) => {
    // Simulate login process
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0]
    };
    
    setUser(mockUser);
    
    // Merge guest cart with user session
    mergeGuestCart();
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
