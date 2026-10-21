import React from 'react';
import { Search } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/productsData';
import './ProductFilter.css';

export const ProductFilter = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="product-filter-control-card glass-card">
      <div className="product-search-input-wrap">
        <Search size={18} className="product-search-icon" />
        <input
          type="text"
          placeholder="Filter by alloy, diameter, spec, or name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="product-filter-input"
        />
      </div>

      <div className="product-category-pills">
        {PRODUCT_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`prod-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
