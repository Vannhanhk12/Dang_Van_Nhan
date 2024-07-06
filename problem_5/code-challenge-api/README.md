## Setup Guide

To run this code, you need to ensure that you have Node.js, npm, and PostgreSQL installed on your local machine. Follow the steps below to set up and run the project:

1. Clone the Repository:

```
git clone https://github.com/Vannhanhk12/Dang_Van_Nhan.git
cd problem_5/code-challenge-api
```

2. Install Dependency

```
npm install
```

3. Setup Database

- Create a PostgreSQL database.
- Update the database connection information in the .env file with your database credentials.

4. Build the Project:
   `npm run build`
5. Seed data:
   `npm run seed`
6. Run the project:
   `npm run start`
7. You can import the provided Postman collection file to see and test all available APIs at:
   `src/Code-Challenge-API.postman_collection.json`

## API Documentation:

### Create a Code Challenge

Endpoint:

```
POST /api/code-challenges
```

**Description**:
Creates a new code challenge.

**Curl Example**:

```
curl --location 'http://localhost:3000/api/code-challenges' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Problem 4",
    "description": "Three ways to sum to n",
    "difficulty": "easy",
    "point": 5
}'
```

**Response Example**:

    200 Created if create success.
    400 Bad Request if query parameters are invalid.

### Get List of Code Challenges

**Endpoint:**

```
GET /api/code-challenges
```

**Description:**
Fetches a paginated list of code challenges.

**Request:**

```
curl --location 'http://localhost:3000/api/code-challenges?page=1&limit=5'
```

**Response:**

    200 OK with a list of code challenges.
    400 Bad Request if query parameters are invalid.

### Get Code Challenge Details

**Endpoint:**

```
GET /api/code-challenges/:id
```

**Description**:
Fetches the details of a specific code challenge.

**Curl Example**:

```
curl --location 'http://localhost:3000/api/code-challenges/2'
```

**Response:**

    200 OK with info of challenge details.
    404 Not Found if the challenge does not exist.

### Delete a Code Challenge

Endpoint:

```
DELETE /api/code-challenges/:id
```

**Description**:
Deletes a specific code challenge.

**Curl Example**:

```
curl --location --request DELETE 'http://localhost:3000/api/code-challenges/1'
```

Response:

    204 No Content on successful deletion.
    404 Not Found if the challenge does not exist.

### Update a Code Challenge

Endpoint:

```
PUT /api/code-challenges/:id
```

Description:
Updates the details of a specific code challenge.

**Curl Example**:

```
curl --location --request PUT 'http://localhost:3000/api/code-challenges/2' \
--header 'Content-Type: application/json' \
--data '{
"title": "Update Code Challenge 2",
"description": "Changed description of Challenge 2"
}'
```

**Response Example**:

    200 OK on successful update.
    400 Bad Request if any required field is missing or invalid.
    404 Not Found if the challenge does not exist.
