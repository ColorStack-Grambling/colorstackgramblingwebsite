# Member Spotlight API Documentation

## Overview
The Member Spotlight API manages featured members in the ColorStack Grambling Chapter website. It provides CRUD operations for member spotlights with proper validation and error handling.

## Model Schema
```javascript
{
  memberName: {
    type: String,
    required: true
  },
  achievements: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  photoUrl: {
    type: String,
    required: true
  },
  graduationYear: {
    type: Number,
    required: true
  },
  major: {
    type: String,
    required: true
  }
}
```

## API Endpoints

### Create Member Spotlight
- **Method:** POST
- **Endpoint:** `/api/spotlights`
- **Request Body:**
```json
{
  "memberName": "John Doe",
  "achievements": ["Dean's List", "Hackathon Winner"],
  "photoUrl": "https://example.com/photo.jpg",
  "graduationYear": 2025,
  "major": "Computer Science"
}
```
- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request`

### Get All Spotlights
- **Method:** GET
- **Endpoint:** `/api/spotlights`
- **Query Parameters:** None
- **Success Response:** `200 OK`
```json
[
  {
    "_id": "...",
    "memberName": "John Doe",
    "achievements": ["..."],
    "date": "2024-02-20T...",
    "photoUrl": "...",
    "graduationYear": 2025,
    "major": "Computer Science"
  }
]
```

### Get Spotlight by ID
- **Method:** GET
- **Endpoint:** `/api/spotlights/:id`
- **URL Parameters:** id=[MongoDB ObjectId]
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found`

### Update Spotlight
- **Method:** PUT
- **Endpoint:** `/api/spotlights/:id`
- **URL Parameters:** id=[MongoDB ObjectId]
- **Request Body:** Same as Create
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found`

### Delete Spotlight
- **Method:** DELETE
- **Endpoint:** `/api/spotlights/:id`
- **URL Parameters:** id=[MongoDB ObjectId]
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found`

## Error Handling
All endpoints include error handling for:
- Invalid MongoDB ObjectIds
- Missing required fields
- Database operation failures
- Not found resources

## Testing
To run the tests:
```bash
npm test
```

Test cases cover:
1. Successful creation of spotlight
2. Validation of required fields
3. Invalid graduation year handling
4. MongoDB ObjectId validation
5. CRUD operations validation

## Example Usage with cURL
```bash
# Create new spotlight
curl -X POST http://localhost:5000/api/spotlights \
  -H "Content-Type: application/json" \
  -d '{
    "memberName": "John Doe",
    "achievements": ["Dean'\''s List"],
    "photoUrl": "https://example.com/photo.jpg",
    "graduationYear": 2025,
    "major": "Computer Science"
  }'

# Get all spotlights
curl http://localhost:5000/api/spotlights

# Get specific spotlight
curl http://localhost:5000/api/spotlights/[spotlightId]

# Update spotlight
curl -X PUT http://localhost:5000/api/spotlights/[spotlightId] \
  -H "Content-Type: application/json" \
  -d '{
    "major": "Updated Major"
  }'

# Delete spotlight
curl -X DELETE http://localhost:5000/api/spotlights/[spotlightId]
```