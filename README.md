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
- **GET /upload/:id**: Get details of a specific student.

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

```
![image](https://github.com/user-attachments/assets/d194da90-169b-4d1c-8e30-85734d681d50)
![image](https://github.com/user-attachments/assets/e43bafc1-854f-498b-b9d0-3132d42fcf39)
![image](https://github.com/user-attachments/assets/79a3d444-9acb-4a85-9f36-073235779ccf)
![image](https://github.com/user-attachments/assets/a6a05610-ecac-4fa7-9020-487087611e84)
