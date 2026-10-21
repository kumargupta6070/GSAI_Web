import React, { createContext, useContext, useState, useCallback } from 'react';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const hideAlert = useCallback((id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const showAlert = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    const newAlert = { id, message, type, duration };

    setAlerts(prev => [...prev, newAlert]);

    if (duration > 0) {
      setTimeout(() => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
      }, duration);
    }
    return id;
  }, []);

  const showSuccess = useCallback((message, duration = 4000) => {
    return showAlert(message, 'success', duration);
  }, [showAlert]);

  const showError = useCallback((message, duration = 4000) => {
    return showAlert(message, 'error', duration);
  }, [showAlert]);

  const showWarning = useCallback((message, duration = 4000) => {
    return showAlert(message, 'warning', duration);
  }, [showAlert]);

  const showInfo = useCallback((message, duration = 4000) => {
    return showAlert(message, 'info', duration);
  }, [showAlert]);

  return (
    <SnackbarContext.Provider value={{ 
      alerts, 
      showAlert, 
      hideAlert, 
      showSuccess, 
      showError, 
      showWarning, 
      showInfo 
    }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export default SnackbarContext;
