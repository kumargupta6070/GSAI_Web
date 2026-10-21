import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import Button from '../../../../common/Button/Button';
import './ProductGrid.css';

export const ProductGrid = ({ products = [], onOpenDetail, onResetFilters }) => {
  if (products.length === 0) {
    return (
      <div className="product-empty-grid-card glass-card">
        <h3>No products match your search</h3>
        <p>Try resetting the category filter or searching for a broader term like "ring", "forging", or "machined".</p>
        <Button variant="outline" size="md" onClick={onResetFilters}>
          Reset All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="product-grid-catalog">
      {products.map((product, idx) => (
        <ScrollReveal key={product.id} animation="fade-up" delay={idx * 75}>
          <ProductCard product={product} onOpenDetail={onOpenDetail} />
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ProductGrid;
