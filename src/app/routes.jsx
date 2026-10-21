import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Feature Pages
import Home from '../features/home/Home';
import About from '../features/about/About';
import Products from '../features/products/Products';
import Capabilities from '../features/capabilities/Capabilities';
import Industries from '../features/industries/Industries';
import Quality from '../features/quality/Quality';
import Contact from '../features/contact/Contact';
import Button from '../common/Button/Button';

// 404 Not Found Component
export const NotFoundPage = () => {
  return (
    <div className="not-found-container container">
      <div className="not-found-card glass-card">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Engineering Blueprint Not Found</h1>
        <p className="not-found-desc">
          The requested technical page or resource does not exist or has been relocated to another manufacturing division.
        </p>
        <Link to="/">
          <Button variant="forge" size="lg">
            Return to Headquarters Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/capabilities" element={<Capabilities />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
