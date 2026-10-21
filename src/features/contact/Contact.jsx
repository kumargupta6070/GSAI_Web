import React, { useEffect } from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../animations/ScrollReveal/ScrollReveal';
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';
import MapEmbed from './components/MapEmbed/MapEmbed';
import { updateSeoMeta } from '../../utils/seoMeta';
import './Contact.css';

export const Contact = () => {
  useEffect(() => {
    updateSeoMeta({
      title: 'Contact GSA Industries | Global RFQ, Plant Visit & Technical Support',
      description: 'Submit an engineering RFQ or schedule a plant visit at GSA Industries India Pvt Ltd, Derabassi. Specialized in Alfin rings, forging and CNC machining.',
      keywords: 'Contact GSA, RFQ Alfin ring, GSA Industries Derabassi, Mohali forge plant, automotive forging quotation'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero-section">
        <div className="container">
          <ScrollReveal direction="down">
            <span className="page-category-badge">Global Engineering &amp; RFQ Desk</span>
            <h1 className="contact-main-heading">
              Let’s Engineer Your Next <span className="highlight-forge">Precision Solution</span>
            </h1>
            <p className="contact-subheading">
              Whether you require high-nickel Alfin insert rings, closed-die precision forgings, or turnkey CNC machined components, our senior metallurgical team is ready to analyze your technical drawings and provide a rapid, competitive quotation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form and Info Layout */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-two-column-grid">
            <ScrollReveal direction="left" delay={100} className="contact-form-column">
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="contact-info-column">
              <ContactInfo />
            </ScrollReveal>
          </div>

          {/* Interactive Map Embed */}
          <ScrollReveal direction="up" delay={300}>
            <MapEmbed />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
