import React from 'react';
import { useSnackbar } from '../context/SnackbarContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import './Snackbar.css';

const ICONS = {
  success: <CheckCircle2 size={20} className="snackbar-icon success" />,
  error: <AlertCircle size={20} className="snackbar-icon error" />,
  warning: <AlertTriangle size={20} className="snackbar-icon warning" />,
  info: <Info size={20} className="snackbar-icon info" />
};

export const SnackbarContainer = () => {
  const { alerts, hideAlert } = useSnackbar();

  if (!alerts.length) return null;

  return (
    <div className="snackbar-root-portal" role="region" aria-label="Notifications">
      {alerts.map(alert => (
        <div 
          key={alert.id} 
          className={`snackbar-item snackbar-${alert.type}`}
          role="alert"
        >
          <div className="snackbar-body">
            {ICONS[alert.type] || ICONS.info}
            <div className="snackbar-message">{alert.message}</div>
          </div>
          <button 
            className="snackbar-close-btn"
            onClick={() => hideAlert(alert.id)}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
          {alert.duration > 0 && (
            <div 
              className="snackbar-progress-bar" 
              style={{ animationDuration: `${alert.duration}ms` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SnackbarContainer;
