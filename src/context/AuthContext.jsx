'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

// Contexts
export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

// Estado inicial
const initialState = {
  user: {
    isAuthenticated: false,
    profile: null,
    loading: false,
  },
};

// Reducer
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, user: { ...state.user, loading: true } };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          isAuthenticated: true,
          profile: action.payload,
          loading: false,
        },
      };

    case 'LOGIN_ERROR':
      return {
        ...state,
        user: { isAuthenticated: false, profile: null, loading: false },
      };

    case 'LOGOUT':
      return {
        ...state,
        user: { isAuthenticated: false, profile: null, loading: false },
      };

    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          profile: { ...state.user.profile, ...action.payload },
        },
      };

    default:
      return state;
  }
}

// Provider
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Form states for auth pages (login, signup, etc.)
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Load from localStorage on mount
  // useEffect(() => {
  //   const savedUser = localStorage.getItem('alphalete-user');
  //   if (savedUser) {
  //     try {
  //       const userData = JSON.parse(savedUser);
  //       dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
  //     } catch (error) {
  //       console.error('Error loading user from localStorage:', error);
  //     }
  //   }
  // }, []);

  // Save user to localStorage on change
  // useEffect(() => {
  //   if (state.user.isAuthenticated && state.user.profile) {
  //     localStorage.setItem(
  //       'alphalete-user',
  //       JSON.stringify(state.user.profile)
  //     );
  //   } else {
  //     localStorage.removeItem('alphalete-user');
  //   }
  // }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        showPassword,
        setShowPassword,
        errors,
        setErrors,
        isLoading,
        setIsLoading,
        formData,
        setFormData,
      }}
    >
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
