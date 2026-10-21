import React from 'react';
import { useSnackbar } from '../../context/SnackbarContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import './CustomAlert.css';

const ICONS = {
  success: <CheckCircle2 size={20} className="alert-icon success" />,
  error: <AlertCircle size={20} className="alert-icon error" />,
  warning: <AlertTriangle size={20} className="alert-icon warning" />,
  info: <Info size={20} className="alert-icon info" />
};

export const CustomAlert = () => {
  const { alerts, hideAlert } = useSnackbar();

  if (!alerts || !alerts.length) return null;

  return (
    <div className="custom-alert-portal" role="region" aria-label="Notifications">
      {alerts.map(alert => (
        <div 
          key={alert.id} 
          className={`custom-alert-item alert-${alert.type}`}
          role="alert"
        >
          <div className="custom-alert-body">
            {ICONS[alert.type] || ICONS.info}
            <div className="custom-alert-message">{alert.message}</div>
          </div>
          <button 
            className="custom-alert-close-btn"
            onClick={() => hideAlert(alert.id)}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
          {alert.duration > 0 && (
            <div 
              className="custom-alert-progress" 
              style={{ animationDuration: `${alert.duration}ms` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAlert;
