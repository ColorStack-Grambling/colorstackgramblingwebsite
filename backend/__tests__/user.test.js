const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

let mongoServer;
let adminToken;
let userToken;
let userPassword;
let userId;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.disconnect();

  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create admin user
  const admin = await User.create({
    username: "Admin User",
    email: "admin@example.com",
    password: "Admin123!",
    role: "admin",
    refreshToken: null,
  });

  // Admin login to get token
  const adminLogin = await request(app)
    .post("/api/users/login")
    .send({ email: "admin@example.com", password: "Admin123!" });

  adminToken = adminLogin.body.accessToken;

  if (!adminToken) throw new Error("Admin login failed!");

  // Create a regular user (member) using admin access
  const userCreation = await request(app)
    .post("/api/users/add-user")
    .set("Authorization", `Bearer ${adminToken}`)
    .send({
      username: "Regular User",
      email: "user@example.com",
      password: "User123!",
      // Role is member by default
    });

  userId = userCreation.body?.user?.id || userCreation.body?.id;
  userPassword = userCreation.body.defaultPassword;

  if (!userId) throw new Error("User creation failed");

  // User login to get token
  const userLogin = await request(app)
    .post("/api/users/login")
    .send({ email: "user@example.com", password: userPassword });

  userToken = userLogin.body.accessToken;

  if (!userToken) throw new Error("User login failed!");
});

afterAll(async () => {
  try {
    await mongoose.connection.dropDatabase(); // Clear the database
    await mongoose.connection.close(); // Close the connection

    if (mongoServer) await mongoServer.stop(); // Stop the in-memory MongoDB server
  } catch (error) {}
});

describe("User Authentication & Management Test", () => {
  // Preventing non-admin users from using certain routes
  it("should not allow a non-admin to create a user", async () => {
    const res = await request(app)
      .post("/api/users/add-user")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        username: "Unauthorized User",
        email: "unauh@example.com",
        password: "Test123!",
        role: "admin",
      });

    expect(res.status).toBe(403);
    expect(res.body.message).toBe(
      "Forbidden: Only admins can perform this action"
    );
  });

  // Allows users to change their passwords
  it("should allow a user to change password", async () => {
    const res = await request(app)
      .post("/api/users/change-password")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        oldPassword: userPassword,
        newPassword: "NewPass123!",
        confirmPassword: "NewPass123!",
      });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Password changed successfully");
  });

  // Prevents non-admins from deleting users
  it("should not allow an unauthorized user to delete user", async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.status).toBe(403);
    expect(res.body.message).toBe(
      "Forbidden: Only admins can perform this action"
    );
  });

  // Prevents non-admins from getting all users
  it("should not allow an unauthorized user to get all users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.status).toBe(403);
    expect(res.body.message).toBe(
      "Forbidden: Only admins can perform this action"
    );
  });

  // Prevents non-admins from updating user information
  it("should not allow an unauthorized user to update user information", async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        username: "Now an Admin User",
        email: "nowadmin@example.com",
        role: "admin",
      });

    expect(res.status).toBe(403);
    expect(res.body.message).toBe(
      "Forbidden: Only admins can perform this action"
    );
  });

  // Admin should be able to see all users
  it("should allow an admin to get all users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
  });

  // Admin should be able to change user information like making a non-admin user an admin
  it("should allow an admin to change user details", async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .set("Authorization", `Bearer ${adminToken}`)
      .send({
        username: "Now Admin User",
        email: "NowAdmin@example.com",
        role: "admin",
      });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User updated successfully");
  });

  // Admin should be able to delete a user
  it("should allow an admin to delete a user", async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User deleted successfully");
  });

  // Allows users to log out
  it("should log out a user", async () => {
    const res = await request(app)
      .post("/api/users/logout")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Logged out successfully!");
  });
});
