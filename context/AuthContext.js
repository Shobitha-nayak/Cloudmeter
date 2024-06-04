// context/AuthContext.js
import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      localStorage.setItem('token', data.token);
    } else {
      throw new Error(data.message);
    }
  };

  const signup = async (email, password) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      localStorage.setItem('token', data.token);
    } else {
      throw new Error(data.message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
