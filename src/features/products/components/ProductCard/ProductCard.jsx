import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './ProductCard.css';

export const ProductCard = ({ product, onOpenDetail }) => {
  return (
    <TiltCard maxTilt={5}>
      <div className="product-module-card glass-card">
      <div className="product-media-top">
        <img src={product.image} alt={product.name} className="product-thumb-img" />
        <span className="product-category-pill">{product.category}</span>
        <span className="product-badge-pill">{product.badge}</span>
      </div>

      <div className="product-info-wrap">
        <h3 className="product-item-title">{product.name}</h3>
        <p className="product-item-tagline">{product.tagline}</p>
        <p className="product-item-desc">{product.description}</p>

        <div className="product-spec-preview-matrix">
          {Object.entries(product.specs).slice(0, 2).map(([k, v], i) => (
            <div key={i} className="spec-preview-row">
              <span className="sp-key">{k}:</span>
              <span className="sp-val mono-font">{v}</span>
            </div>
          ))}
        </div>

        <div className="product-materials-chip-list">
          {product.materials.slice(0, 2).map((m, i) => (
            <span key={i} className="product-mat-chip mono-font">{m}</span>
          ))}
        </div>

        <div className="product-action-footer">
          <Button
            variant="secondary"
            size="sm"
            icon={<Eye size={15} />}
            onClick={() => onOpenDetail(product)}
          >
            Technical Specs
          </Button>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
            <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </TiltCard>
  );
};

export default ProductCard;
