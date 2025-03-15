# Email Service Documentation

## Overview
The email service provides functionality to send automated emails for event registrations using Gmail SMTP. It supports different environments (development, test, and production) and includes comprehensive error handling and logging.

## Configuration

### Environment Variables
Create a `.env` file in the `backend` directory with the following email-related variables:

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your-app-password
NODE_ENV=development  # or 'production' or 'test'
```

**Important Notes:**
- For Gmail, you must use an App Password, not your regular account password
- The App Password should be 16 characters without spaces
- Enable 2-Step Verification in your Google Account to generate an App Password

### Development Environment
In development mode without email credentials:
- A test account is automatically created using Ethereal Email
- Preview URLs are provided in the console for viewing sent emails
- SMTP verification is performed to ensure connection stability

### Test Environment
In test mode:
- SMTP verification is skipped
- Email sending is mocked
- Console logs are suppressed during tests

### Production Environment
In production mode:
- Uses Gmail SMTP server
- Performs SMTP verification before sending emails
- Includes detailed error logging

## Usage

### Sending Event Registration Emails

```javascript
const { sendEventRegistrationEmail } = require('./services/emailService');

// Example event details
const eventDetails = {
  title: 'Event Name',
  date: new Date('2024-12-25'),
  location: 'Event Location',
  description: 'Event Description' // Optional
};

// Send email
try {
  await sendEventRegistrationEmail('user@example.com', eventDetails);
} catch (error) {
  console.error('Failed to send registration email:', error);
}
```

### Email Template
The service sends HTML emails with:
- Event title, date, location, and description
- Professional formatting with consistent styling
- ColorStack Grambling branding
- Fallback for missing optional fields

## Testing

### Running Tests
```bash
npm test
```

### Test Coverage
The email service tests verify:
- Successful email sending with complete event details
- Error handling for failed email attempts
- Handling of missing optional fields
- SMTP transport configuration
- Email content and formatting

### Mock Configuration
Tests use Jest mocks to:
- Mock nodemailer transport
- Verify email content and recipients
- Test error scenarios
- Suppress console output

## Error Handling
The service includes:
- SMTP connection verification (except in test environment)
- Detailed error logging
- Graceful handling of missing optional fields
- Proper error propagation

## Best Practices
1. Always use environment variables for sensitive credentials
2. Test email functionality in development using Ethereal Email
3. Monitor console logs for sending status and errors
4. Handle errors appropriately in the calling code
5. Keep email templates maintainable and consistent

## Troubleshooting
1. Verify environment variables are properly set
2. Ensure Gmail App Password is correct and without spaces
3. Check Gmail account settings (2-Step Verification, Less secure app access)
4. Monitor console logs for detailed error messages
5. Verify network connectivity and firewall settings 