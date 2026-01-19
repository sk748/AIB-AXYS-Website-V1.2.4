import AuditLog from '@/models/AuditLog';
import { getIpAddress, getUserAgent } from './audit';

/**
 * Rate Limiter - Simple in-memory implementation
 * For production, use Redis or a dedicated rate limiting service
 */

const rateLimitStore = new Map();

export function rateLimit(identifier, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const key = identifier;
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  const record = rateLimitStore.get(key);

  if (now > record.resetTime) {
    // Reset window
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { 
      allowed: false, 
      remaining: 0,
      resetTime: record.resetTime
    };
  }

  record.count++;
  return { allowed: true, remaining: limit - record.count };
}

/**
 * Input sanitization
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  // Remove potential XSS attempts
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (Kenya)
 */
export function isValidPhone(phone) {
  // Accepts: +254..., 254..., 07..., 01...
  const phoneRegex = /^(\+254|254|0)[17]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ''));
}

/**
 * Clean rate limit store periodically
 */
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      if (now > record.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 60000); // Clean every minute
}
