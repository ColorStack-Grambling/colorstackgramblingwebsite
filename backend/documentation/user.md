# User Authentication & Management System

## Overview

This project provides a user authentication and management system that allows administrators to manage users (create, update, delete) and restrict certain actions based on user roles (admin or regular user). The system uses JWT-based authentication and implements middleware to protect certain routes from unauthorized access.

This document will walk you through the setup, functionality, schema, and how to test the system using **Postman**.

---

## **Functionality**

### **1. User Roles**
The system implements two main roles:
- **Admin:** Can perform any action including creating, updating, deleting users.
- **Regular User:** Can perform basic actions like changing their password but cannot perform admin-only actions.

### **2. Routes & Endpoints**

#### **POST `/api/users/login`**  
- **Description:** Logs in a user with their email and password. Returns an access token and refresh token.
- **Request:**
  - URL: `http://localhost:5000/api/users/login`
  - Method: `POST`
  - Body: Raw JSON

```json
{
  "email": "user@example.com",
  "password": "User123!"
}
```

- **Response:**

```json
{
  "accessToken": "your_access_token",
  "refreshToken": "your_refresh_token"
}
```

#### **POST `/api/users/add-user`**  
- **Description:** Creates a new user (only accessible by admin).
- **Authorization:** Bearer token (admin required).
- **Request:**
  - URL: `http://localhost:5000/api/users/add-user`
  - Method: `POST`
  - Headers:
    - `Authorization: Bearer admin_access_token`
  - Body: Raw JSON

```json
{
  "username": "New User",
  "email": "newuser@example.com",
  "password": "NewPass123!"
}
```

- **Response:**

```json
{
  "user": {
    "id": "user_id",
    "username": "New User",
    "email": "newuser@example.com"
  }
}
```

#### **POST `/api/users/change-password`**  
- **Description:** Allows a user to change their password.
- **Authorization:** Bearer token (accessible by the user themselves).
- **Request:**
  - URL: `http://localhost:5000/api/users/change-password`
  - Method: `POST`
  - Headers:
    - `Authorization: Bearer user_access_token`
  - Body: Raw JSON

```json
{
  "oldPassword": "User123!",
  "newPassword": "NewPass123!",
  "confirmPassword": "NewPass123!"
}
```

- **Response:**

```json
{
  "message": "Password changed successfully"
}
```

#### **PUT `/api/users/:id`**  
- **Description:** Allows updating user details (only accessible by admin).
- **Authorization:** Bearer token (admin required).
- **Request:**
  - URL: `http://localhost:5000/api/users/{user_id}`
  - Method: `PUT`
  - Headers:
    - `Authorization: Bearer admin_access_token`
  - Body: Raw JSON

```json
{
  "username": "Updated User",
  "email": "updateduser@example.com",
  "role": "admin"
}
```

- **Response:**

```json
{
  "message": "User updated successfully"
}
```

#### **DELETE `/api/users/:id`**  
- **Description:** Deletes a user (only accessible by admin).
- **Authorization:** Bearer token (admin required).
- **Request:**
  - URL: `http://localhost:5000/api/users/{user_id}`
  - Method: `DELETE`
  - Headers:
    - `Authorization: Bearer admin_access_token`
  
- **Response:**

```json
{
  "message": "User deleted successfully"
}
```

#### **GET `/api/users`**  
- **Description:** Retrieves all users (only accessible by admin).
- **Authorization:** Bearer token (admin required).
- **Request:**
  - URL: `http://localhost:5000/api/users`
  - Method: `GET`
  - Headers:
    - `Authorization: Bearer admin_access_token`
  
- **Response:**

```json
[
  {
    "id": "user_id",
    "username": "User Name",
    "email": "user@example.com",
    "role": "admin"
  },
  {
    "id": "user_id",
    "username": "Regular User",
    "email": "user@example.com",
    "role": "member"
  }
]
```

#### **POST `/api/users/logout`**  
- **Description:** Logs out the user by invalidating the access token.
- **Authorization:** Bearer token (accessible by the user themselves).
- **Request:**
  - URL: `http://localhost:5000/api/users/logout`
  - Method: `POST`
  - Headers:
    - `Authorization: Bearer user_access_token`
  
- **Response:**

```json
{
  "message": "Logged out successfully"
}
```

---

## **Schema**

The user schema is structured as follows:

```js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'member'], default: 'member' },
  refreshToken: { type: String }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password with hashed password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT
userSchema.methods.generateAuthToken = function () {
  const accessToken = jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  this.refreshToken = refreshToken;
  return { accessToken, refreshToken };
};

module.exports = mongoose.model('User', userSchema);
```

### **Fields:**
- **username:** The username of the user.
- **email:** The email address of the user.
- **password:** The hashed password of the user.
- **role:** The role of the user (`admin` or `member`).
- **refreshToken:** The refresh token for the user.

---

## **Setup**

### **1. Install Dependencies**

Make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

### **2. Database Setup**

- This application uses **MongoDB** for storing user data.
- In testing, an in-memory MongoDB server (`mongodb-memory-server`) is used to simulate a database.

### **3. Running the Server**

To start the server:

```bash
npm start
```

By default, the server will run on port `5000`.

### **4. Running Tests**

For testing, Jest is used with **supertest** for API endpoint testing.

- To run tests, use the following command:

```bash
npm test
```

Tests are configured to run against an in-memory database to ensure no data is persisted between test runs.

---

## **Testing the System with Postman**

### **1. Test User Creation:**
To test user creation:
1. Open Postman and create a `POST` request to `http://localhost:5000/api/users/login`.
2. Provide the necessary login credentials in the body (`email` and `password`).
3. Once you receive the access token, use it for subsequent requests.

### **2. Test Unauthorized Access:**
Test that non-admin users cannot access routes requiring admin privileges by trying to create, update, or delete users.

### **3. Test Password Change:**
Test if users can change their passwords by sending a `POST` request to `http://localhost:5000/api/users/change-password`.

### **4. Test Admin Operations:**
Test admin operations like adding, updating, and deleting users by sending appropriate requests using the admin access token.

---

## **Conclusion**

This system provides a comprehensive user management solution, including role-based access control. The tests ensure that only authorized users can perform specific actions, and the server is set up for both development and testing purposes.

--- 
