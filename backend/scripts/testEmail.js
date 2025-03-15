const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { sendEventRegistrationEmail } = require('../services/emailService');

// Log environment variables for debugging
console.log('Environment Check:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '****' + process.env.EMAIL_PASSWORD.slice(-4) : 'Not set');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Working Directory:', process.cwd());
console.log('ENV File Path:', path.resolve(__dirname, '../.env'));
console.log('-------------------\n');

const testEvent = {
    title: "Test Event",
    date: new Date('2024-12-25'),
    location: "Grambling State University",
    description: "This is a test email for the ColorStack event registration system."
};

async function sendTestEmail() {
    try {
        // Verify environment variables are loaded
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            throw new Error('Email configuration is missing. Please check your .env file.');
        }

        console.log('Starting email test...');
        console.log('Using email configuration:');
        console.log('- From:', process.env.EMAIL_USER);
        console.log('- To: fnuworsu@gsumail.gram.edu');
        console.log('- Event:', testEvent.title);
        
        console.log('\nAttempting to send test email...');
        const result = await sendEventRegistrationEmail('fnuworsu@gsumail.gram.edu', testEvent);
        
        console.log('\nEmail sent successfully!');
        console.log('Message ID:', result.messageId);
        console.log('Preview URL (if available):', result.previewUrl);
        
        console.log('\nTest completed successfully!');
    } catch (error) {
        console.error('\nFailed to send email:');
        console.error('Error type:', error.name);
        console.error('Error message:', error.message);
        
        if (error.message.includes('Email configuration is missing')) {
            console.error('\nPlease check that your .env file contains:');
            console.error('EMAIL_USER=colorstackgrambling@gmail.com');
            console.error('EMAIL_PASSWORD=your-16-character-app-password');
            console.error('\nFile should be located at:', path.resolve(__dirname, '../.env'));
            console.error('\nCurrent content of .env file:');
            try {
                const envContent = require('fs').readFileSync(path.resolve(__dirname, '../.env'), 'utf8');
                console.error(envContent);
            } catch (err) {
                console.error('Could not read .env file:', err.message);
            }
        } else if (error.code === 'EAUTH') {
            console.error('\nAuthentication failed. Please check:');
            console.error('1. Your Gmail app password is correct');
            console.error('2. You have enabled 2-Step Verification');
            console.error('3. The app password is properly copied (16 characters, no spaces)');
        } else if (error.code === 'ESOCKET') {
            console.error('\nConnection failed. Please check:');
            console.error('1. Your internet connection');
            console.error('2. Gmail is not blocked by firewall/antivirus');
            console.error('3. You are not using a VPN that might block SMTP');
        }
    }
}

sendTestEmail(); 