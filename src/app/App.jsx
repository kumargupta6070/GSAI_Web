import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import { SnackbarProvider } from '../context/SnackbarContext';

// Common Components
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import SearchBar from '../common/SearchBar/SearchBar';
import CustomAlert from '../common/CustomAlert/CustomAlert';
import ScrollToTop from '../common/ScrollToTop/ScrollToTop';

// Routes Configuration
import AppRoutes from './routes';
import './App.css';

// Scroll to top automatically when navigation occurs
const RouteChangeScroller = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export const AppContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-layout">
      <RouteChangeScroller />
      
      {/* Top Header with Navigation & Theme Toggle */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Viewport */}
      <main id="main-content" className="app-main-content">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Elements */}
      <SearchBar 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      <ScrollToTop />
      <CustomAlert />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
