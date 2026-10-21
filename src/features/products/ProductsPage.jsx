import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';
import { 
  Layers, 
  Search, 
  Filter, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Flame,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import ScrollReveal from '../../animations/ScrollReveal';
import { PRODUCTS_DATA } from '../../data/gsaData';
import './ProductsPage.css';

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'alfin', label: 'Alfin Rings' },
  { id: 'forged', label: 'Forged Components' },
  { id: 'cnc', label: 'CNC Machining' },
  { id: 'auto', label: 'Automotive Parts' },
  { id: 'agri', label: 'Agricultural Implements' },
  { id: 'heat', label: 'Heat Treated Parts' }
];

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { showAlert } = useSnackbar();

  const handleDownloadBrochure = (productName) => {
    showAlert(`Technical data sheet for "${productName}" is ready. Downloading PDF specification...`, 'success');
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(prod => {
      const matchCat = activeCategory === 'all' || prod.categorySlug === activeCategory;
      const matchSearch = searchQuery.trim() === '' || 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-page-root">
      {/* Products Hero */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <span className="section-tag">
              <Layers size={14} /> Product Portfolio
            </span>
            <h1 className="products-hero-title">
              Engineered Precision <span className="text-gradient">Forgings &amp; Alfin Rings</span>
            </h1>
            <p className="products-hero-desc">
              Discover our complete range of high-nickel Alfin rings, hot closed-die forgings, and finished CNC-machined components engineered for global Tier-1 applications.
            </p>

            {/* In-Page Search & Filter Toolbar */}
            <div className="products-filter-toolbar glass-card">
              <div className="products-search-box">
                <Search size={18} className="search-filter-icon" />
                <input
                  type="text"
                  placeholder="Filter by alloy, diameter, spec, or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="products-search-input"
                />
              </div>

              <div className="category-pills-list">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`cat-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="section-spacing products-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="products-empty-state glass-card">
              <h3>No products matched your criteria</h3>
              <p>Try resetting the category filter or searching for a broader term like "ring", "forging", or "boron".</p>
              <Button 
                variant="outline" 
                size="md" 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="products-master-grid">
              {filteredProducts.map((product, idx) => (
                <ScrollReveal key={product.id} animation="fade-up" delay={idx * 80}>
                  <div className="product-master-card glass-card">
                    <div className="prod-card-top-media">
                      <img src={product.image} alt={product.name} className="prod-master-img" />
                      <span className="prod-card-cat-tag">{product.category}</span>
                      <span className="prod-card-badge-tag">{product.badge}</span>
                    </div>

                    <div className="prod-master-body">
                      <div className="prod-header-group">
                        <h3 className="prod-master-title">{product.name}</h3>
                        <p className="prod-master-tagline">{product.tagline}</p>
                      </div>

                      <p className="prod-master-desc">{product.description}</p>

                      {/* Specs Matrix */}
                      <div className="prod-specs-matrix">
                        {Object.entries(product.specs).map(([key, val], i) => (
                          <div key={i} className="prod-spec-row">
                            <span className="spec-k">{key}:</span>
                            <span className="spec-v mono-font">{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Material Tags */}
                      <div className="prod-materials-group">
                        <span className="materials-header">Key Alloys:</span>
                        <div className="material-pill-tags">
                          {product.materials.map((m, i) => (
                            <span key={i} className="mat-pill mono-font">{m}</span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="prod-master-actions">
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={<Eye size={15} />}
                          onClick={() => setSelectedProduct(product)}
                        >
                          Technical Blueprint
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Download size={15} />}
                          onClick={() => handleDownloadBrochure(product.name)}
                          title="Download Technical Spec Sheet"
                        >
                          Data Sheet
                        </Button>
                        <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                          <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                            Request RFQ
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Spec Detail Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          subtitle={`${selectedProduct.category} • Certified Quality Specifications`}
          maxWidth="780px"
        >
          <div className="modal-product-content">
            <div className="modal-product-top">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="modal-product-img" 
              />
              <div className="modal-product-summary">
                <p className="modal-desc">{selectedProduct.description}</p>
                <div className="modal-specs-table">
                  <h4 className="specs-table-title">Engineering Parameters &amp; Tolerances</h4>
                  <div className="specs-table-grid">
                    {Object.entries(selectedProduct.specs).map(([k, v], i) => (
                      <div key={i} className="specs-row">
                        <span className="specs-col-key">{k}</span>
                        <span className="specs-col-val mono-font">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-features-section">
              <h4>Key Metallurgical &amp; Design Advantages</h4>
              <ul className="modal-features-list">
                {selectedProduct.features.map((feat, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-materials-section">
              <h4>Primary Applications</h4>
              <div className="material-chips">
                {selectedProduct.applications.map((app, i) => (
                  <span key={i} className="mat-chip">{app}</span>
                ))}
              </div>
            </div>

            <div className="modal-action-bar">
              <Button
                variant="outline"
                size="md"
                icon={<Download size={16} />}
                onClick={() => handleDownloadBrochure(selectedProduct.name)}
              >
                Download PDF Spec Sheet
              </Button>
              <Link 
                to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
              >
                <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                  Request RFQ for this Product
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductsPage;
