import { SITE_METADATA } from '../../../data/siteMetadata';

export const CONTACT_METADATA = {
  ...SITE_METADATA,
  departments: [
    { name: 'Technical Sales & Global RFQ', email: 'sales@gsainds.com', phone: '+91 1762 281144' },
    { name: 'Quality Assurance & APQP', email: 'quality@gsainds.com', phone: '+91 1762 281145' },
    { name: 'Human Resources & Careers', email: 'hr@gsainds.com', phone: '+91-175-5041269' }
  ],
  logistics: [
    { title: 'Airport Proximity', detail: 'Shaheed Bhagat Singh Intl. Airport (IXC) — ~25 km / 35 minutes' },
    { title: 'Railway Freight Access', detail: 'Ambala Cantt Junction (UMB) & Chandigarh Junction (CDG)' },
    { title: 'Inland Container Depots', detail: 'ICD Dappar (Derabassi) & ICD Ludhiana for seamless sea export shipping' }
  ]
};

export default CONTACT_METADATA;
