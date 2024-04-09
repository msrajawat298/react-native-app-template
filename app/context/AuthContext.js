import axios from 'axios';
import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import * as SecureStore from 'expo-secure-store';
import { API_URL, JWT_KEY } from '../constants/constants';

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync(JWT_KEY);
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
      }
      setInitialized(true);
    };
    loadToken();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const result = await axios.post(`${API_URL}auth/login`, { username, password });
      setToken(result.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(JWT_KEY, result.data.token);
      return result;
    } catch (error) {
      return { error: true, msg: 'Invalid credentials' };
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      const result = await axios.post(`${API_URL}users/add`, { username, email, password });
      return result;
    } catch (error) {
      return { error: true, msg: error.message };
    }
  };

  const handleLogout = async () => {
    setToken(null);
    await SecureStore.deleteItemAsync(JWT_KEY);
    axios.defaults.headers.common.Authorization = '';
  };

  const value = useMemo(() => ({
    initialized,
    onLogin: handleLogin,
    onRegister: handleRegister,
    onLogout: handleLogout,
    token,
  }), [initialized, handleLogin, handleRegister, handleLogout, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
