// Set test environment
process.env.NODE_ENV = 'test';

const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-message-id' });
const mockTransport = {
    sendMail: mockSendMail,
    verify: jest.fn().mockResolvedValue(true)
};

// Mock nodemailer before requiring the service
jest.mock('nodemailer', () => ({
    createTransport: jest.fn().mockReturnValue(mockTransport)
}));

// Import after mocking
const { sendEventRegistrationEmail } = require('../services/emailService');
const nodemailer = require('nodemailer');

describe('Email Service Tests', () => {
    // Spy on console.error and suppress it during tests
    let consoleErrorSpy;

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
        // Suppress console.error messages
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        // Suppress console.log messages
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        // Restore console.error after each test
        consoleErrorSpy.mockRestore();
    });

    it('should send event registration confirmation email', async () => {
        const testEvent = {
            title: 'Test Event',
            date: new Date('2024-12-25'),
            location: 'Test Location',
            description: 'Test Description'
        };

        const userEmail = 'fnuworsu@gsumail.gram.edu';

        await sendEventRegistrationEmail(userEmail, testEvent);

        // Check if createTransport was called
        expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
        
        // Check if sendMail was called with correct parameters
        expect(mockSendMail).toHaveBeenCalledTimes(1);
        
        const emailCall = mockSendMail.mock.calls[0][0];
        expect(emailCall).toMatchObject({
            from: {
                name: 'ColorStack Grambling',
                address: process.env.EMAIL_USER
            },
            to: userEmail,
            subject: 'Event Registration Confirmation'
        });

        // Verify email content
        expect(emailCall.html).toContain(testEvent.title);
        expect(emailCall.html).toContain(testEvent.location);
        expect(emailCall.html).toContain(testEvent.description);

        // Verify no errors were logged
        expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should throw error when email sending fails', async () => {
        // Setup mock to reject
        mockSendMail.mockRejectedValueOnce(new Error('Failed to send email'));

        const testEvent = {
            title: 'Test Event',
            date: new Date('2024-12-25'),
            location: 'Test Location',
            description: 'Test Description'
        };

        await expect(sendEventRegistrationEmail('fnuworsu@gsumail.gram.edu', testEvent))
            .rejects
            .toThrow('Failed to send email');

        // Verify error was logged with correct message
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error sending email:',
            expect.any(Error)
        );
    });

    it('should handle events with missing optional fields', async () => {
        const testEvent = {
            title: 'Test Event',
            date: new Date('2024-12-25'),
            location: 'Test Location',
            // description is missing
        };

        await sendEventRegistrationEmail('fnuworsu@gsumail.gram.edu', testEvent);

        expect(mockSendMail).toHaveBeenCalledTimes(1);
        
        const emailCall = mockSendMail.mock.calls[0][0];
        expect(emailCall.html).toContain(testEvent.title);
        expect(emailCall.html).toContain(testEvent.location);
        expect(emailCall.html).toContain('No description provided');

        // Verify no errors were logged
        expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
}); 