import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Download } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import Modal from '../../../../common/Modal/Modal';
import { useSnackbar } from '../../../../context/SnackbarContext';
import './ProductDetail.css';

export const ProductDetail = ({ product, isOpen, onClose }) => {
  const { showAlert } = useSnackbar();

  if (!product) return null;

  const handleDownload = () => {
    showAlert(`Downloading technical spec sheet for ${product.name}.`, 'success');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      subtitle={`${product.category} • Certified Precision Specification`}
      maxWidth="780px"
    >
      <div className="product-detail-modal-body">
        <div className="detail-top-grid">
          <img src={product.image} alt={product.name} className="detail-media-img" />
          <div className="detail-desc-block">
            <p className="detail-description">{product.description}</p>
            <div className="detail-specs-matrix">
              <h4>Engineering Parameters &amp; Tolerances</h4>
              <div className="detail-specs-table">
                {Object.entries(product.specs).map(([k, v], i) => (
                  <div key={i} className="detail-spec-row">
                    <span className="spec-name">{k}:</span>
                    <span className="spec-val mono-font">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="detail-features-block">
          <h4>Key Metallurgical &amp; Design Advantages</h4>
          <ul className="detail-features-list">
            {product.features.map((feat, i) => (
              <li key={i}>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-materials-block">
          <h4>Available Material Grades &amp; International Standards</h4>
          <div className="material-pill-tags">
            {product.materials.map((mat, i) => (
              <span key={i} className="mat-tag mono-font">{mat}</span>
            ))}
          </div>
        </div>

        <div className="detail-modal-actions">
          <Button
            variant="outline"
            size="md"
            icon={<Download size={16} />}
            onClick={handleDownload}
          >
            Download PDF Spec Sheet
          </Button>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`} onClick={onClose}>
            <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
              Request RFQ for this Product
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
