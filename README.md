# Bulk Upload Backend

A backend for handling CSV file uploads, storing student data, and providing APIs for viewing and managing the data.

## Features

- **CSV File Upload**: Upload student data via CSV.
- **Pagination**: Retrieve student data in pages.
- **Upload History**: View the history of file uploads.

## Requirements

- Node.js (v14+)
- A database (e.g., PostgreSQL or MySQL)
- Environment variables for database and JWT secret

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bulk-upload-backend.git
    cd bulk-upload-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables in a `.env` file (use `.env.example` as a template):

    ```plaintext
    DATABASE_URL=your-database-url
    PORT=3000
    JWT_SECRET=your-jwt-secret
    ```

4. Start the server:

    ```bash
    npm run start
    ```

## Endpoints

- **POST /upload**: Upload a CSV file with student data.
- **GET /upload**: Get paginated student data.
- **GET /upload/history**: Get upload history.
- **GET /upload/:id**: Get details of a specific upload.

## Folder Structure

```plaintext
src/
├── upload/
│   ├── controllers/
│   ├── services/
│   └── entities/
├── app.module.ts
└── main.ts
