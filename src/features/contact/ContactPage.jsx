import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  UploadCloud, 
  FileCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  User, 
  FileText,
  Plane,
  Train
} from 'lucide-react';
import Button from '../../common/Button';
import Input, { Textarea } from '../../common/Input';
import ScrollReveal from '../../animations/ScrollReveal';
import { COMPANY_INFO } from '../../data/gsaData';
import './ContactPage.css';

export const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get('product') || '';
  const prefillIndustry = searchParams.get('industry') || '';
  const prefillSubject = searchParams.get('subject') || '';

  const { showAlert } = useSnackbar();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productCategory: prefillProduct ? 'Custom Inquiry' : 'Alfin Rings',
    annualVolume: '10,000 - 50,000 pcs',
    materialGrade: '',
    targetSpecs: prefillProduct ? `Inquiry regarding ${prefillProduct}` : '',
    message: prefillSubject || prefillIndustry ? `Interested in ${prefillSubject || prefillIndustry} solutions.` : ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqId, setSubmittedRfqId] = useState(null);

  useEffect(() => {
    if (prefillProduct && !formData.targetSpecs) {
      setFormData(prev => ({ ...prev, targetSpecs: `Inquiry for ${prefillProduct}` }));
    }
  }, [prefillProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        showAlert('File size exceeds 25 MB limit. Please upload a smaller archive.', 'error');
        return;
      }
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
      showAlert(`Uploaded ${file.name} successfully. Drawing attached to RFQ.`, 'success');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) {
      showAlert('Please fill in all required fields marked with *', 'warning');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `GSA-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRfqId(generatedId);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      showAlert(`RFQ Submitted successfully! Your reference ID is ${generatedId}. Our engineering team will respond within 24 hours.`, 'success', 6000);
    }, 1200);
  };

  return (
    <div className="contact-page-root">
      {/* Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <span className="section-tag">
              <Mail size={14} /> Direct OEM Engineering Connection
            </span>
            <h1 className="contact-hero-title">
              Request a Technical <span className="text-gradient">RFQ / Quotation</span>
            </h1>
            <p className="contact-hero-lead">
              Submit your 2D engineering drawings, CAD models (STEP/IGES), or sample parameters. Our metallurgical and die tooling engineers will review and respond with DFM feasibility and cost estimates within 24 to 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="section-spacing contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Interactive RFQ Form */}
            <div className="contact-form-column">
              <div className="rfq-form-card glass-card">
                <div className="form-card-header">
                  <h3>Submit Technical Specifications</h3>
                  <p>All client intellectual property &amp; drawings are protected under strict NDA standards.</p>
                </div>

                {submittedRfqId ? (
                  <div className="rfq-success-state">
                    <div className="success-icon-bubble">
                      <CheckCircle2 size={44} className="text-emerald" />
                    </div>
                    <h3>RFQ Successfully Received!</h3>
                    <p className="rfq-id-pill mono-font">Tracking ID: {submittedRfqId}</p>
                    <p className="success-desc">
                      Thank you, <strong>{formData.fullName}</strong>. Your RFQ inquiry for <strong>{formData.company}</strong> has been assigned to a Senior Sales Engineer. We will review your requirements and provide formal pricing and lead time estimates.
                    </p>
                    <div className="success-actions">
                      <Button 
                        variant="primary" 
                        size="md" 
                        onClick={() => {
                          setSubmittedRfqId(null);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            company: '',
                            country: '',
                            productCategory: 'Alfin Rings',
                            annualVolume: '10,000 - 50,000 pcs',
                            materialGrade: '',
                            targetSpecs: '',
                            message: ''
                          });
                          setUploadedFile(null);
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rfq-form-body">
                    {/* Row 1: Name & Email */}
                    <div className="form-two-col">
                      <Input
                        label="Full Name"
                        name="fullName"
                        placeholder="e.g. John Doe / Rajesh Kumar"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        icon={<User size={16} />}
                      />
                      <Input
                        label="Corporate Email"
                        name="email"
                        type="email"
                        placeholder="e.g. j.doe@oemgroup.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        icon={<Mail size={16} />}
                      />
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="form-two-col">
                      <Input
                        label="Phone / WhatsApp"
                        name="phone"
                        placeholder="+91 / +1 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        icon={<Phone size={16} />}
                      />
                      <Input
                        label="Company / OEM Name"
                        name="company"
                        placeholder="e.g. Caterpillar / Tier-1 OEM"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        icon={<Building2 size={16} />}
                      />
                    </div>

                    {/* Row 3: Product Category & Est Volume */}
                    <div className="form-two-col">
                      <div className="input-field-group">
                        <label className="input-label">Product Category <span className="text-orange">*</span></label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="input-base-element"
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

                    {/* Row 4: Material & Target Dimensions */}
                    <div className="form-two-col">
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

                    {/* File Upload Zone */}
                    <div className="drawing-upload-section">
                      <label className="input-label">Attach 2D/3D Drawings (PDF, DWG, STEP, IGES, ZIP - Max 25MB)</label>
                      <label className="upload-dropzone">
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden-file-input"
                          accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.zip,.rar"
                        />
                        <UploadCloud size={32} className="upload-icon text-cyan" />
                        <div className="upload-text-group">
                          <strong>Click or Drag Drawing Files Here</strong>
                          <span>Supported formats: STEP, IGES, PDF, DWG, ZIP (Confidential)</span>
                        </div>
                      </label>

                      {uploadedFile && (
                        <div className="uploaded-file-pill">
                          <FileCheck size={18} className="text-emerald" />
                          <span className="file-name">{uploadedFile.name} ({uploadedFile.size})</span>
                          <span className="file-ready">Attached</span>
                        </div>
                      )}
                    </div>

                    {/* Message / Remarks */}
                    <Textarea
                      label="Additional Project Details / Requirements"
                      name="message"
                      rows={4}
                      placeholder="Please mention any specific heat treatment requirements, surface finish, inspection certificates (PPAP Level 3), or target delivery dates..."
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {/* Submit Button */}
                    <div className="form-submit-row">
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
                      <span className="nda-reassurance">
                        <ShieldCheck size={14} className="text-emerald" /> Mutual Non-Disclosure Agreement (NDA) Protected
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Contacts & Logistics Map */}
            <div className="contact-info-column">
              {/* Direct Info Card */}
              <div className="info-glass-card glass-card">
                <h3>Plant &amp; Headquarters</h3>
                <p className="info-card-sub">Global Manufacturing Operations</p>

                <div className="contact-details-list">
                  <div className="contact-detail-row">
                    <div className="contact-detail-icon">
                      <MapPin size={22} className="text-orange" />
                    </div>
                    <div>
                      <strong>Factory Address:</strong>
                      <p>Village Dappar, Tehsil Derabassi, Distt. Mohali, Punjab - 140506, India</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-detail-icon">
                      <Phone size={22} className="text-cyan" />
                    </div>
                    <div>
                      <strong>Direct Telephones:</strong>
                      <p><a href="tel:+911762281144">+91 1762 281144</a></p>
                      <p><a href="tel:+911762281145">+91 1762 281145</a></p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-detail-icon">
                      <Mail size={22} className="text-cyan" />
                    </div>
                    <div>
                      <strong>Official Electronic Mail:</strong>
                      <p><a href="mailto:info@gsainds.com">info@gsainds.com</a> (General)</p>
                      <p><a href="mailto:sales@gsainds.com">sales@gsainds.com</a> (RFQ / Sales)</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-detail-icon">
                      <Clock size={22} className="text-amber" />
                    </div>
                    <div>
                      <strong>Plant Working Hours:</strong>
                      <p>Monday – Saturday: 08:30 AM – 06:00 PM (IST)</p>
                      <p>24x7 Continuous Forging &amp; Heat Treatment Operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Logistics Card */}
              <div className="info-glass-card glass-card">
                <h3>Connectivity &amp; Logistics Hub</h3>
                <p className="info-card-sub">Strategic Location in Northern India</p>

                <div className="transit-list">
                  <div className="transit-item">
                    <Plane size={20} className="text-cyan" />
                    <div>
                      <strong>Shaheed Bhagat Singh Intl. Airport (IXC)</strong>
                      <p>Approx 25 km / 35 minutes via NH 152</p>
                    </div>
                  </div>
                  <div className="transit-item">
                    <Train size={20} className="text-orange" />
                    <div>
                      <strong>Ambala Cantt &amp; Chandigarh Junctions</strong>
                      <p>Direct railway freight access for raw steel logistics</p>
                    </div>
                  </div>
                  <div className="transit-item">
                    <Building2 size={20} className="text-emerald" />
                    <div>
                      <strong>Inland Container Depots (ICD)</strong>
                      <p>ICD Dappar &amp; ICD Ludhiana for seamless sea export shipping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
