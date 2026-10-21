/**
 * CSRF Token helper for simulating token exchange with upcoming Node.js backend
 */

export const getCsrfToken = () => {
  let token = sessionStorage.getItem('gsa_csrf_token');
  if (!token) {
    token = 'csrf_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('gsa_csrf_token', token);
  }
  return token;
};

export const validateCsrfToken = (incomingToken) => {
  const stored = sessionStorage.getItem('gsa_csrf_token');
  return stored && stored === incomingToken;
};
