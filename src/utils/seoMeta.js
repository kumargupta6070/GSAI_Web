export const setPageTitle = (title, description = '') => {
  const brandSuffix = 'GSA Industries India Pvt Ltd';
  document.title = title ? `${title} | ${brandSuffix}` : `${brandSuffix} — World-Class Precision Forgings & Alfin Rings`;

  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }
};

export const updateSeoMeta = ({ title, description, keywords }) => {
  setPageTitle(title, description);

  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
  }
};

export default setPageTitle;
