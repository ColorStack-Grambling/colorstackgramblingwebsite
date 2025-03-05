# Events API Documentation

## Overview
This API provides endpoints for managing events, allowing users to create, read, update, and delete event records.

## Model Schema

```javascript
title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
```

## Base URL
`/api/events`

## Endpoints

### 1. Create a New Event
- **Endpoint:** `POST /`
- **Description:** Add a new event to the system
- **Request Body:** Event object with required details
- **Success Response:** 
  - **Code:** 201 Created
  - **Content:** Created event object
- **Error Response:**
  - **Code:** 500 Internal Server Error
  - **Content:** Error message

**Example Request:**
```json
{
  "title": "Summer Music Festival",
  "date": "2024-07-15",
  "location": "Central Park",
  "description": "Annual summer music celebration"
}
```

### 2. Update an Existing Event
- **Endpoint:** `PUT /:id`
- **Description:** Update details of an existing event
- **URL Parameters:** `id` (required) - Unique identifier of the event
- **Request Body:** Updated event object
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** Updated event object
- **Error Responses:**
  - **Code:** 404 Not Found (if event doesn't exist)
  - **Code:** 500 Internal Server Error

**Example Request:**
```json
{
  "title": "Updated Summer Music Festival",
  "date": "2024-07-16"
}
```

### 3. Delete an Event
- **Endpoint:** `DELETE /:id`
- **Description:** Remove an event from the system
- **URL Parameters:** `id` (required) - Unique identifier of the event
- **Success Response:**
  - **Code:** 204 No Content
- **Error Responses:**
  - **Code:** 404 Not Found (if event doesn't exist)
  - **Code:** 500 Internal Server Error

### 4. Retrieve All Events
- **Endpoint:** `GET /`
- **Description:** Fetch all events in the system
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** Array of event objects
- **Error Response:**
  - **Code:** 500 Internal Server Error

### 5. Retrieve a Single Event
- **Endpoint:** `GET /:id`
- **Description:** Fetch details of a specific event
- **URL Parameters:** `id` (required) - Unique identifier of the event
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** Event object
- **Error Responses:**
  - **Code:** 404 Not Found (if event doesn't exist)
  - **Code:** 500 Internal Server Error

## Error Handling
All endpoints return a 500 Internal Server Error if an unexpected error occurs during processing. The response includes an error message detailing the issue.

## Example Event Object
```json
{
  "id": "unique-event-identifier",
  "title": "Summer Music Festival",
  "date": "2024-07-15",
  "location": "Central Park",
  "description": "Annual summer music celebration",
  "createdAt": "2024-03-05T12:00:00Z",
  "updatedAt": "2024-03-05T12:00:00Z"
}
```

## Notes
- Ensure all required fields are provided when creating or updating an event
- Event IDs are generated automatically by the system
- Timestamps for creation and last update are managed automatically
