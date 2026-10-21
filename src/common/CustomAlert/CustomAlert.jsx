import React from 'react';
import { useSnackbar } from '../../context/SnackbarContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import './CustomAlert.css';

const ALERT_CONFIG = {
  success: {
    icon: <CheckCircle2 size={20} color="#ffffff" strokeWidth={2.4} />,
    iconClass: 'icon-circle-success'
  },
  error: {
    icon: <AlertTriangle size={20} color="#ffffff" strokeWidth={2.4} />,
    iconClass: 'icon-circle-error'
  },
  warning: {
    icon: <AlertTriangle size={20} color="#ffffff" strokeWidth={2.4} />,
    iconClass: 'icon-circle-warning'
  },
  info: {
    icon: <Info size={20} color="#ffffff" strokeWidth={2.4} />,
    iconClass: 'icon-circle-info'
  }
};

export const CustomAlert = () => {
  const { alerts, hideAlert } = useSnackbar();

  if (!alerts || !alerts.length) return null;

  return (
    <div className="custom-snackbar-viewport" role="region" aria-label="Notifications">
      {alerts.map(alert => {
        const config = ALERT_CONFIG[alert.type] || ALERT_CONFIG.info;
        const alertType = alert.type === 'warning' ? 'error' : alert.type; // user Flutter code maps warning to error style

        return (
          <div 
            key={alert.id} 
            className={`custom-snackbar-container snackbar-${alertType}`}
            role="alert"
          >
            {/* Circular Icon Container */}
            <div className={`custom-snackbar-icon-box ${config.iconClass}`}>
              {config.icon}
            </div>

            {/* Message Body */}
            <div className="custom-snackbar-text">
              {alert.message}
            </div>

            {/* Dismiss Button */}
            <button 
              className="custom-snackbar-close-btn"
              onClick={() => hideAlert(alert.id)}
              aria-label="Dismiss notification"
              title="Dismiss"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CustomAlert;
