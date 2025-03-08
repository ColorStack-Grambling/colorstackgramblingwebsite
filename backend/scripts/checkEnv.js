require('dotenv').config();

console.log('Checking environment variables...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '****' + process.env.EMAIL_PASSWORD.slice(-4) : 'Not set');
console.log('NODE_ENV:', process.env.NODE_ENV); 