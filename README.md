# ColorStack Grambling State University Chapter Website

[![Website Status](https://img.shields.io/website?url=https%3A//colorstackgrambling.org/)](https://colorstackgrambling.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

The official website for the ColorStack chapter at Grambling State University, designed to foster community engagement, showcase member achievements, and manage chapter events for underrepresented students in technology.

🌐 **Live Website:** [https://colorstackgrambling.org/](https://colorstackgrambling.org/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Development Guidelines](#development-guidelines)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## About

ColorStack is a nonprofit organization that works to increase the number of Black and Latinx computer science graduates who enter and remain in technical careers. This website serves as the digital hub for the Grambling State University chapter, providing:

- Event management and registration
- Member spotlight features
- Community resources and networking opportunities
- Chapter news and announcements
- Professional development resources

## Features

- **📅 Event Management**: Create, manage, and track chapter events
- **👥 Member Profiles**: Showcase member achievements and career journeys
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🔐 User Authentication**: Secure member login and registration
- **📊 Analytics Dashboard**: Track engagement and chapter metrics
- **💼 Career Resources**: Job postings, internship opportunities, and professional development

## Technology Stack

### Frontend
- **React 18.x** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for secure authentication
- **Bcrypt** - Password hashing library

### Development Tools
- **ESLint** - JavaScript linting utility
- **Prettier** - Code formatting tool
- **Nodemon** - Development utility for auto-restarting the server

## Project Structure

```
colorstack-chapter-website/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # Global styles and Tailwind config
│   │   └── App.js           # Main application component
│   ├── package.json
│   └── README.md
├── backend/                 # Node.js/Express backend API
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── utils/           # Backend utilities
│   ├── config/              # Configuration files
│   ├── package.json
│   └── server.js            # Main server file
├── docs/                    # Project documentation
├── .gitignore
├── README.md
└── LICENSE
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0 or higher) - Comes with Node.js
- **MongoDB** (v5.0 or higher) - [Installation guide](https://docs.mongodb.com/manual/installation/)
- **Git** - [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/colorstack-chapter-website.git
   cd colorstack-chapter-website
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Environment Setup

1. **Backend Environment Variables**
   
   Create a `.env` file in the `backend/` directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/colorstack_grambling
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```

2. **Frontend Environment Variables**
   
   Create a `.env` file in the `frontend/` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SITE_NAME=ColorStack Grambling
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The API will be available at `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The website will be available at `http://localhost:3000`

## Development Guidelines

### Branch Management
- **Main Branch**: Production-ready code only
- **Feature Branches**: Create a branch for each feature/fix using the format: `feature/your-name-feature-description`
- **Personal Branches**: Use your name as the branch name for ongoing development

### Code Standards
- Follow ES6+ JavaScript standards
- Use meaningful variable and function names
- Comment complex logic and functions
- Maintain consistent indentation (2 spaces)
- Run ESLint before committing code

### Commit Messages
Use conventional commit format:
```
type(scope): description

Examples:
feat(auth): add user registration functionality
fix(events): resolve date formatting issue
docs(readme): update installation instructions
```

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes and test thoroughly
3. Update documentation if necessary
4. Submit a pull request with a clear description
5. Wait for code review before merging

## API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://api.colorstackgrambling.org/api
```

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile

### Event Endpoints
- `GET /events` - Get all events
- `POST /events` - Create new event (Admin only)
- `GET /events/:id` - Get event by ID
- `PUT /events/:id` - Update event (Admin only)
- `DELETE /events/:id` - Delete event (Admin only)

For detailed API documentation, visit `/api/docs` when running the development server.

## Deployment

The application is deployed using:
- **Frontend**: Vercel/Netlify
- **Backend**: Heroku/Railway
- **Database**: MongoDB Atlas

### Deployment Commands
```bash
# Build frontend for production
cd frontend && npm run build

# Start production server
cd backend && npm start
```

## Contributing

We welcome contributions from all chapter members! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-name-amazing-feature
   ```
3. **Make your changes and commit them**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/your-name-amazing-feature
   ```
5. **Open a Pull Request**

### Code of Conduct
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Support

- **Chapter Leaders**: Contact chapter leadership for project-related questions
- **Technical Issues**: Create an issue in this repository
- **General Questions**: Reach out in the chapter Slack workspace

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the ColorStack Grambling State University Chapter**

*Empowering the next generation of diverse technologists*
