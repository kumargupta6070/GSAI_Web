/**
 * Client-side rate limiter to prevent spamming RFQ or inquiry forms
 */

const submissionTimestamps = [];

export const checkRateLimit = (maxRequests = 5, windowMinutes = 10) => {
  const now = Date.now();
  const windowMs = windowMinutes * 60 * 1000;

  // Filter out timestamps outside window
  const recent = submissionTimestamps.filter(time => now - time < windowMs);
  submissionTimestamps.length = 0;
  submissionTimestamps.push(...recent);

  if (submissionTimestamps.length >= maxRequests) {
    return {
      allowed: false,
      message: `Too many submissions. Please wait ${windowMinutes} minutes before trying again.`
    };
  }

  submissionTimestamps.push(now);
  return { allowed: true };
};
