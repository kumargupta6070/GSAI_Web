import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductFilter from './components/ProductFilter/ProductFilter';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../animations/ScrollReveal/ScrollReveal';
import { ALL_PRODUCTS } from './data/productsData';
import { setPageTitle } from '../../utils/seoMeta';
import { Layers } from 'lucide-react';
import './Products.css';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setPageTitle('Products Portfolio', 'High-nickel Alfin rings, hot closed-die forgings, and CNC-machined parts from GSA Industries India Pvt Ltd.');
  }, []);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(prod => {
      const matchCat = activeCategory === 'all' || prod.categorySlug === activeCategory;
      const matchSearch = searchQuery.trim() === '' || 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-feature-page">
      <div className="container products-breadcrumb-wrap">
        <Breadcrumb items={[{ label: 'Products' }]} />
      </div>

      <section className="section-spacing products-header-section">
        <div className="container">
          <ScrollReveal animation="fade-up" delay={50}>
            <SectionTitle
              tag="Engineered Products"
              icon={<Layers size={14} />}
              title="Complete Portfolio of Precision"
              gradientWord="Forgings &amp; Alfin Rings"
              gradientType="primary"
              subtitle="Engineered for high-cycle fatigue, elevated combustion temperatures, and rigorous Tier-1 OEM tolerances."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={120}>
            <ProductFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </ScrollReveal>

          <ProductGrid
            products={filteredProducts}
            onOpenDetail={(product) => setSelectedProduct(product)}
            onResetFilters={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
          />
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
