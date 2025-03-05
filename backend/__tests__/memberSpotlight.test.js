const mongoose = require('mongoose');
const MemberSpotlight = require('../models/MemberSpotlight');
const request = require('supertest');
const path = require('path');
const fs = require('fs');
const router = require('../routes/spotlightRoutes');
const express = require('express');

let app;
let server;

describe('MemberSpotlight Model Test', () => {
    beforeAll(async () => {
        app = express();
        app.use(express.json());
        app.use('/spotlights', router);
        server = app.listen(3001); // Use a specific port for testing
        await mongoose.connect('mongodb://localhost:27017/colorstack_test');
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await server.close(); // Close the server
    });

    afterEach(async () => {
        await MemberSpotlight.deleteMany();
    });

    it('should create & save member spotlight successfully', async () => {
        const validSpotlight = {
            memberName: 'John Doe',
            achievements: ['Dean\'s List', 'Hackathon Winner'],
            photoUrl: 'https://tinyurl.com/57vujhpu',
            graduationYear: 2025,
            major: 'Computer Science'
        };
        const savedSpotlight = await MemberSpotlight.create(validSpotlight);
        
        expect(savedSpotlight._id).toBeDefined();
        expect(savedSpotlight.memberName).toBe(validSpotlight.memberName);
        expect(savedSpotlight.date).toBeDefined();
    });

    // Validating the required fields
    it('should fail to save spotlight without required fields', async () => {
        const spotlightWithoutRequired = new MemberSpotlight({
            memberName: 'John Doe',
            achievements: ['Dean\'s List', 'Hackathon Winner'],
            graduationYear: 2025,
            major: 'Computer Science'
        });

        let err;
        try {
            await spotlightWithoutRequired.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    // Validating the graduationYear
    it('should fail with invalid graduation year', async () => {
        const invalidSpotlight = {
            memberName: 'John Doe',
            achievements: ['Achievement'],
            photoUrl: 'https://tinyurl.com/57vujhpu',
            graduationYear: 'invalid',
            major: 'Computer Science'
        };

        let err;
        try {
            await MemberSpotlight.create(invalidSpotlight);
        } catch (error) {
            err = error;
        }
        expect(err).toBeDefined();
    });


    it('should handle photo upload successfully', async () => {
        const assetsDir = path.join(__dirname, 'test_assets');
        const testImagePath = path.join(assetsDir, 'test_image.png');
        fs.writeFileSync(testImagePath, 'fake image content');

        try {
            const response = await request(app) 
                .post('/spotlights')
                .attach('photo', testImagePath)
                .field('memberName', 'Jane Doe')
                .field('achievements', 'Achievement 1,Achievement 2')
                .field('graduationYear', '2025')
                .field('major', 'Computer Science');

            expect(response.status).toBe(201);
            expect(response.body.photoUrl).toBeDefined();
            expect(response.body.photoUrl).toMatch(/^\/uploads\/.+\.png$/);
        } finally {
            if (fs.existsSync(testImagePath)) {
                fs.unlinkSync(testImagePath);
            }
            if (fs.existsSync(fixturesDir)) {
                fs.rmdirSync(fixturesDir);
            }
        }
    }, 10000);
});