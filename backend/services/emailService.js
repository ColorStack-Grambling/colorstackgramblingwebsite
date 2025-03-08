const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Create reusable transporter object using Gmail SMTP
const createTransporter = async () => {
    // Create a test account if we're in development and don't have credentials
    if (process.env.NODE_ENV === 'development' && !process.env.EMAIL_PASSWORD) {
        console.log('Creating test account for development...');
        const testAccount = await nodemailer.createTestAccount();
        return nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });
    }

    // Create the production transporter with Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // This tells nodemailer it's Gmail
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Skip verification during tests
    if (process.env.NODE_ENV !== 'test') {
        try {
            await transporter.verify();
            console.log('SMTP connection established successfully');
        } catch (error) {
            console.error('Error establishing SMTP connection:', error);
            throw error;
        }
    }

    return transporter;
};

// Function to send event registration confirmation email
exports.sendEventRegistrationEmail = async (userEmail, eventDetails) => {
    try {
        const transporter = await createTransporter();
        const mailOptions = {
            from: {
                name: 'ColorStack Grambling',
                address: process.env.EMAIL_USER
            },
            to: userEmail,
            subject: 'Event Registration Confirmation',
            html: `
                <h1 style="color: #2c3e50; font-family: Arial, sans-serif;">Event Registration Confirmation</h1>
                <p style="font-size: 16px;">Thank you for registering for ${eventDetails.title}!</p>
                <h2 style="color: #34495e;">Event Details:</h2>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Event:</strong> ${eventDetails.title}</li>
                    <li style="margin: 10px 0;"><strong>Date:</strong> ${new Date(eventDetails.date).toLocaleDateString()}</li>
                    <li style="margin: 10px 0;"><strong>Location:</strong> ${eventDetails.location}</li>
                    <li style="margin: 10px 0;"><strong>Description:</strong> ${eventDetails.description || 'No description provided'}</li>
                </ul>
                <p style="font-size: 16px; margin-top: 20px;">We look forward to seeing you there!</p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #7f8c8d;">Best regards,<br>ColorStack Grambling Team</p>
                </div>
            `
        };

        console.log('Sending email to:', userEmail);
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully. Message ID:', info.messageId);
        
        // Log URL for development testing
        if (process.env.NODE_ENV === 'development' && !process.env.EMAIL_PASSWORD) {
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
        
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

// Export for testing
exports.createTransporter = createTransporter;
