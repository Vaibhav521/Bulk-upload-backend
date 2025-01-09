# Bulk Upload Backend

A backend for handling CSV file uploads, storing student data, and providing APIs for viewing and managing the data.

## Features

- **CSV File Upload**: Upload student data via CSV.
- **Pagination**: Retrieve student data in pages.
- **Upload History**: View the history of file uploads.


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
│   └── schemas/
|   upload.module.ts
├── app.module.ts
└── main.ts
