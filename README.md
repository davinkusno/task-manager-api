# Task Manager API
This repository hosts the source code for a robust Task Manager API, designed to efficiently handle data and provide comprehensive management capabilities for users and tasks. Built using Node.js, Express.js, and MongoDB, the API incorporates various features to ensure security, privacy, and a seamless user experience.

## Features

- **Pagination and filtering** of server responses to ensure efficient data handling and quick page load times.
- **Full CRUD operations** for User and Task instances, allowing comprehensive data management.
- **Hash encryption** of passwords and access management with JWT tokens, ensuring security and privacy.
- **Restricted user access** to CRUD operations based on JWT tokens, providing user-specific access control.
- **Email notifications** upon user creation and deletion, enhancing user experience.

## Accessing the API

You have two options for accessing the Task Manager API:

1. **Local Installation**:
   Follow the instructions provided in the [Installation](###installation) section to set up the API on your local machine.

2. **Live Deployment**:
   If you prefer not to install the API locally, you can visit the live deployment hosted on Vercel. Simply go to [davin-taskmanager.vercel.app](https://davin-taskmanager.vercel.app/) to access the API without the need for complex installation.

## Getting Started

Follow these instructions to set up the Task Manager API on your local machine:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running locally or accessible remotely
- Git installed on your machine (optional)
- SendGrid API key (Sign up for a free account at [SendGrid](https://sendgrid.com/) to obtain an API key)

### Installation

1. Clone this repository to your local machine using:
git clone https://github.com/davinkusno/task-manager-api.git

Alternatively, download the repository as a ZIP file and extract it to your desired location.

2. Navigate to the project directory:
cd task-manager-api

3. Install dependencies using npm:
npm install


4. Create a `.env` file in the root directory and configure the environment variables based on the provided `.env.example`.


`.env.example`  
Replace the values below with your actual database connection string, SendGrid API key, and JWT secret key  
```plaintext
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mydatabase
SENDGRID_API_KEY=your_sendgrid_api_key_here
JWT_SECRET=your_secret_key_here
```

5. Start the server:
npm start


6. The API server will start running locally on port 3000 by default. Access it at `http://localhost:3000`.

### Usage

Once the server is running, interact with the API endpoints using tools like Postman or curl. Below are some of the available endpoints:

#### User Management

- **Create User**: `POST /users`
  - Create a new user account by providing the required information in the request body.
  - Example request:
    ```
    POST /users
    {
      "name": "User",
      "email": "user@example.com",
      "password": "password123",
      "age": 21
    }
    ```

- **Login User**: `POST /users/login`
  - Log in to an existing user account by providing the username/email and password in the request body.
  - Example request:
    ```
    POST /users/login
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```

- **Logout**: `POST /users/logout`
  - Logout the currently authenticated user.
  - Example request:
    ```
    POST /users/logout
    ```

- **Logout All**: `POST /users/logoutAll`
  - Logout the user from all active sessions.
  - Example request:
    ```
    POST /users/logoutAll
    ```

- **Read Profile**: `GET /users/me`
  - Retrieve the user profile information for the currently authenticated user.
  - Example request:
    ```
    GET /users/me
    ```

- **Update User**: `PATCH /users/me`
  - Update the profile information for the currently authenticated user.
  - Example request:
    ```
    PATCH /users/me
    {
      "name": "updatedName",
      "password": "updatedPassword"
    }
    ```

- **Delete User**: `DELETE /users/me`
  - Permanently delete the user account for the currently authenticated user.
  - Example request:
    ```
    DELETE /users/me
    ```

- **Upload Avatar**: `POST /users/me/avatar`
  - Upload a profile picture/avatar for the currently authenticated user.
  - Example request (using form-data):
    ```
    POST /users/me/avatar
    
    [Select file to upload]
    ```

- **Get Avatar**: `GET /users/me/avatar`
  - Retrieve the uploaded avatar/profile picture for the currently authenticated user.
  - Example request:
    ```
    GET /users/me/avatar
    ```

- **Delete Avatar**: `DELETE /users/me/avatar`
  - Delete the uploaded avatar/profile picture for the currently authenticated user.
  - Example request:
    ```
    DELETE /users/me/avatar
    ```

#### Task Management

- **Create Task**: `POST /tasks`
  - Create a new task by providing the task details in the request body.
  - Example request:
    ```
    POST /tasks
    {
      "description": "Task Title",
      "completed": false,
    }
    ```

- **Get Tasks**: `GET /tasks`
  - Retrieve all tasks associated with the currently authenticated user.
  - Example request:
    ```
    GET /tasks
    ```
- **Filter by Completion Status**: `GET /tasks?completed=true`
  - Retrieves tasks that are marked as completed.
  - Example request:
    ```
    GET /tasks?completed=true
    ```

- **Pagination with Limit and Skip**: `GET /tasks?limit=10&skip=0`
  - Retrieves tasks with pagination by specifying the limit (number of tasks per page) and skip (number of tasks to skip for pagination).
  - Example request:
    ```
    GET /tasks?limit=10&skip=0
    ```

- **Sorting by Creation Date**: `GET /tasks?sortBy=createdAt:asc`
  - Retrieves tasks sorted by creation date in ascending order.
  - Example request:
    ```
    GET /tasks?sortBy=createdAt:asc
    ```    

- **Read Task**: `GET /tasks/:id`
  - Retrieve details of a specific task by its ID.
  - Example request:
    ```
    GET /tasks/:id
    ```

- **Update Task**: `PATCH /tasks/:id`
  - Update the details of an existing task by its ID.
  - Example request:
    ```
    PATCH /tasks/:id
    {
      "completed": true
    }
    ```

- **Delete Task**: `DELETE /tasks/:id`
  - Permanently delete a task by its ID.
  - Example request:
    ```
    DELETE /tasks/:id
    ```

### Authentication

The API supports authentication using JSON Web Tokens (JWT). Obtain a JWT by signing up or logging in, and include it in the `Authorization` header of your requests to access authenticated endpoints.

### Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for improvements, please open an issue or create a pull request.

