import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSnackbar } from '../../../../context/SnackbarContext';
import confetti from 'canvas-confetti';
import { 
  Send, 
  UploadCloud, 
  FileCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  User, 
  Mail, 
  Phone 
} from 'lucide-react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import TextArea from '../../../../common/TextArea/TextArea';
import { checkRateLimit } from '../../../../security/rateLimiter';
import { sanitizeString } from '../../../../security/inputSanitizer';
import { generateRfqId } from '../../../../utils/helpers';
import './ContactForm.css';

export const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get('product') || '';
  const prefillIndustry = searchParams.get('industry') || '';
  const prefillSubject = searchParams.get('subject') || '';

  const { showAlert, showError, showSuccess, showWarning } = useSnackbar();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    productCategory: prefillProduct ? 'Custom Inquiry' : 'Alfin Rings',
    annualVolume: '10,000 - 50,000 pcs',
    materialGrade: '',
    targetSpecs: prefillProduct ? `Inquiry regarding ${prefillProduct}` : '',
    message: prefillSubject || prefillIndustry ? `Interested in ${prefillSubject || prefillIndustry} solutions.` : ''
  });

  const [touched, setTouched] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqId, setSubmittedRfqId] = useState(null);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);

  useEffect(() => {
    if (prefillProduct && !formData.targetSpecs) {
      setFormData(prev => ({ ...prev, targetSpecs: `Inquiry for ${prefillProduct}` }));
    }
  }, [prefillProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (!formData[field] || !formData[field].trim()) {
      if (field === 'fullName') {
        showError('Please enter your full name.');
      } else if (field === 'email') {
        showError('Please enter your corporate email.');
      } else if (field === 'company') {
        showError('Please enter your company name.');
      }
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showError('Please enter a valid corporate email address.');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        showError('File size exceeds 25 MB limit.');
        return;
      }
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
      showSuccess(`File attached: ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check rate limit
    const rateCheck = checkRateLimit(5, 10);
    if (!rateCheck.allowed) {
      showError(rateCheck.message);
      return;
    }

    // Granular validation for star (*) required fields
    if (!formData.fullName || !formData.fullName.trim()) {
      showError('Please enter your full name.');
      fullNameRef.current?.focus?.();
      return;
    }

    if (!formData.email || !formData.email.trim()) {
      showError('Please enter your corporate email.');
      emailRef.current?.focus?.();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      showError('Please enter a valid corporate email address.');
      emailRef.current?.focus?.();
      return;
    }

    if (!formData.company || !formData.company.trim()) {
      showError('Please enter your company name.');
      companyRef.current?.focus?.();
      return;
    }

    if (!formData.productCategory) {
      showError('Please select a product category.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = generateRfqId();
      setSubmittedRfqId(generatedId);

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      showSuccess(`RFQ submitted successfully. Reference ID: ${generatedId}.`, 5000);
    }, 1200);
  };

  return (
    <div className="contact-form-component-card glass-card">
      <div className="contact-form-header">
        <div className="form-header-badge">RFQ Portal</div>
        <h3>Submit Technical Specifications</h3>
        <p>All client intellectual property &amp; CAD drawings are strictly protected under international NDA standards.</p>
      </div>

      {submittedRfqId ? (
        <div className="rfq-success-container">
          <div className="success-bubble">
            <CheckCircle2 size={44} className="text-emerald" />
          </div>
          <h3>RFQ Successfully Received!</h3>
          <p className="rfq-id-badge mono-font">Tracking Reference: {submittedRfqId}</p>
          <p className="rfq-success-text">
            Thank you, <strong>{sanitizeString(formData.fullName)}</strong>. Your engineering RFQ for <strong>{sanitizeString(formData.company)}</strong> has been registered with our senior metallurgical team. We will review the geometry, grain structure, and volume metrics and deliver a formal quotation within 24–48 hours.
          </p>
          <div className="mt-3">
            <Button
              variant="forge"
              size="md"
              onClick={() => {
                setSubmittedRfqId(null);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  company: '',
                  productCategory: 'Alfin Rings',
                  annualVolume: '10,000 - 50,000 pcs',
                  materialGrade: '',
                  targetSpecs: '',
                  message: ''
                });
                setUploadedFile(null);
                setTouched({});
              }}
            >
              Submit Another Technical Dossier
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-grid-body" noValidate>
          <div className="form-double-col">
            <div className={`form-field-wrapper ${touched.fullName && !formData.fullName.trim() ? 'field-has-error' : ''}`}>
              <Input
                label="Full Name *"
                name="fullName"
                ref={fullNameRef}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur('fullName')}
                required
                icon={<User size={16} />}
              />
            </div>
            <div className={`form-field-wrapper ${touched.email && (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ? 'field-has-error' : ''}`}>
              <Input
                label="Corporate Email *"
                name="email"
                type="email"
                ref={emailRef}
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                required
                icon={<Mail size={16} />}
              />
            </div>
          </div>

          <div className="form-double-col">
            <Input
              label="Phone or WhatsApp"
              name="phone"
              placeholder="+91 or +1 number"
              value={formData.phone}
              onChange={handleChange}
              icon={<Phone size={16} />}
            />
            <div className={`form-field-wrapper ${touched.company && !formData.company.trim() ? 'field-has-error' : ''}`}>
              <Input
                label="Company or OEM Name *"
                name="company"
                ref={companyRef}
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleChange}
                onBlur={() => handleBlur('company')}
                required
                icon={<Building2 size={16} />}
              />
            </div>
          </div>

          <div className="form-double-col">
            <div className="input-field-group">
              <label className="input-label">Product Category <span className="text-orange">*</span></label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="input-base-element"
                required
              >
                <option value="Alfin Rings">Alfin Insert Rings (High-Nickel Ni-Resist)</option>
                <option value="Hot Forgings">Closed-Die Hot Steel Forgings</option>
                <option value="CNC Machined">Finished CNC / VMC Machined Parts</option>
                <option value="Automotive Parts">Automotive Engine / Drivetrain Parts</option>
                <option value="Agrizone Parts">Agricultural Rotavator Blades &amp; Implements</option>
                <option value="Heat Treated">Continuous Heat Treatment Services</option>
                <option value="Custom Inquiry">Other Custom Forging / Casting</option>
              </select>
            </div>

            <div className="input-field-group">
              <label className="input-label">Estimated Annual Volume</label>
              <select
                name="annualVolume"
                value={formData.annualVolume}
                onChange={handleChange}
                className="input-base-element"
              >
                <option value="Prototype Only">Prototype Batch (10 - 500 pcs)</option>
                <option value="1,000 - 10,000 pcs">1,000 - 10,000 pcs / year</option>
                <option value="10,000 - 50,000 pcs">10,000 - 50,000 pcs / year</option>
                <option value="50,000 - 250,000 pcs">50,000 - 250,000 pcs / year</option>
                <option value="250,000+ pcs">250,000+ High Volume Production</option>
              </select>
            </div>
          </div>

          <div className="form-double-col">
            <Input
              label="Material Grade / Specification"
              name="materialGrade"
              placeholder="e.g. Ni-Resist Type 1, SAE 4140, 20MnCr5"
              value={formData.materialGrade}
              onChange={handleChange}
            />
            <Input
              label="Key Dimensions / OD / Weight"
              name="targetSpecs"
              placeholder="e.g. OD 140 mm, 3.2 kg, ±0.02 mm"
              value={formData.targetSpecs}
              onChange={handleChange}
            />
          </div>

          <div className="drawing-dropzone-block">
            <label className="input-label">Attach 2D/3D Drawings (PDF, DWG, STEP, IGES, ZIP - Max 25MB)</label>
            <label className="upload-dropzone-label">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden-file-input"
                accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.zip,.rar"
              />
              <UploadCloud size={32} className="upload-icon text-cyan" />
              <div className="upload-label-copy">
                <strong>Click or Drag Drawing Files Here</strong>
                <span>Supported formats: STEP, IGES, PDF, DWG, ZIP (Confidential)</span>
              </div>
            </label>

            {uploadedFile && (
              <div className="attached-file-pill">
                <FileCheck size={18} className="text-emerald" />
                <span className="file-name">{uploadedFile.name} ({uploadedFile.size})</span>
                <span className="file-status">Attached</span>
              </div>
            )}
          </div>

          <TextArea
            label="Additional Project Details / Requirements"
            name="message"
            rows={4}
            placeholder="Please mention any specific heat treatment requirements, surface finish, inspection certificates (PPAP Level 3), or target delivery dates..."
            value={formData.message}
            onChange={handleChange}
          />

          <div className="form-action-footer">
            <Button
              type="submit"
              variant="forge"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              icon={isSubmitting ? null : <Send size={18} />}
              iconPosition="right"
            >
              {isSubmitting ? 'Transmitting Technical Dossier...' : 'Submit RFQ for Engineering Review'}
            </Button>
            <span className="nda-note">
              <ShieldCheck size={14} className="text-emerald" /> Mutual Non-Disclosure Agreement (NDA) Protected
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
