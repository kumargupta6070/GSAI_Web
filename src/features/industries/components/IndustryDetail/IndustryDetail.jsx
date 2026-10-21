import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import Modal from '../../../../common/Modal/Modal';
import './IndustryDetail.css';

export const IndustryDetail = ({ industry, isOpen, onClose }) => {
  if (!industry) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={industry.title}
      subtitle={`Sector Scope & Engineering Standards • ${industry.badge}`}
      maxWidth="720px"
    >
      <div className="industry-detail-body">
        <p className="ind-detail-desc">{industry.description}</p>
        <div className="ind-detail-stats-box">
          <span className="mono-font">{industry.stats}</span>
        </div>

        <div className="ind-detail-components-list">
          <h4>Custom Manufactured Components for {industry.title}:</h4>
          <ul>
            {industry.highlights.map((h, i) => (
              <li key={i}>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ind-detail-actions">
          <Link to={`/contact?industry=${encodeURIComponent(industry.title)}`} onClick={onClose}>
            <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
              Submit Sector RFQ Inquiry
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default IndustryDetail;
