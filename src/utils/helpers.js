export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const generateRfqId = () => {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `GSA-RFQ-${randomNum}`;
};
