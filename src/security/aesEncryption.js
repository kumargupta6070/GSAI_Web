/**
 * AES Encryption utility for client-side confidential payload simulation
 * (Uses Web Crypto API SubtleCrypto for zero external dependencies)
 */

export const encryptPayload = async (plainText, keyString = 'GSA-Industries-2026-Secure-Salt') => {
  try {
    const enc = new TextEncoder();
    const keyData = enc.encode(keyString.padEnd(32, '0').slice(0, 32));
    const cryptoKey = await window.crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      enc.encode(plainText)
    );

    const combined = new Uint8Array(iv.length + encrypted.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(encrypted), iv.length);

    return btoa(String.fromCharCode(...combined));
  } catch (error) {
    console.warn('Payload encryption fallback:', error);
    return btoa(plainText);
  }
};

export const decryptPayload = async (cipherBase64, keyString = 'GSA-Industries-2026-Secure-Salt') => {
  try {
    const combined = Uint8Array.from(atob(cipherBase64), c => c.charCodeAt(0));
    const iv = combined.slice(0, 12);
    const data = combined.slice(12);

    const enc = new TextEncoder();
    const keyData = enc.encode(keyString.padEnd(32, '0').slice(0, 32));
    const cryptoKey = await window.crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['decrypt']
    );

    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      data
    );

    return new TextDecoder().decode(decrypted);
  } catch (error) {
    return atob(cipherBase64);
  }
};
