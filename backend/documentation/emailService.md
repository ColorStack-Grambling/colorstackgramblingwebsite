# Email Service Documentation

## Overview
The email service provides functionality to send automated emails for various system events, currently focusing on event registration confirmations. The service uses Nodemailer with Gmail SMTP for sending emails.

## Configuration

### Environment Variables
The following environment variables must be set in your `.env` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

### Gmail Setup Requirements
1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings
   - Navigate to Security
   - Under "2-Step Verification", click on "App passwords"
   - Select "Mail" and your device
   - Use the generated 16-character password in your .env file

## API Reference

### sendEventRegistrationEmail
Sends a confirmation email when a user registers for an event.

```javascript
async function sendEventRegistrationEmail(userEmail: string, eventDetails: EventDetails): Promise<MailResponse>
```

#### Parameters
- `userEmail` (string): The recipient's email address
- `eventDetails` (object):
  - `title` (string): Event title
  - `date` (Date): Event date
  - `location` (string): Event location
  - `description` (string, optional): Event description

#### Returns
- Promise resolving to the mail response object from Nodemailer

#### Example Usage
```javascript
const eventDetails = {
    title: "Tech Workshop",
    date: new Date('2024-12-25'),
    location: "Room 101",
    description: "Hands-on coding workshop"
};

try {
    await sendEventRegistrationEmail('user@example.com', eventDetails);
    console.log('Registration email sent successfully');
} catch (error) {
    console.error('Failed to send registration email:', error);
}
```

## Email Template
The registration confirmation email includes:
- Event title
- Date (formatted as locale string)
- Location
- Description (if provided, otherwise shows "No description provided")
- ColorStack Grambling Team signature

## Error Handling
- The service implements try-catch error handling
- All errors are logged and re-thrown for proper error propagation
- Common errors include:
  - SMTP connection failures
  - Authentication errors
  - Invalid email addresses
  - Missing required event details

## Testing
The email service includes comprehensive tests covering:
1. Successful email sending
2. Error handling
3. Missing optional fields

To run tests:
```bash
npm test
```

### Test Coverage
- Verifies email transport creation
- Validates email content and structure
- Tests error scenarios
- Ensures proper handling of missing fields

## Best Practices
1. Always validate email addresses before sending
2. Handle errors at the application level
3. Use environment variables for sensitive credentials
4. Never commit email credentials to version control
5. Monitor email sending success rates 