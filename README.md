# Video Annotation API

This RESTful API allows users to manage videos and their related annotations. Users can create videos, create annotations for specific parts of a video, update annotation details, delete annotations, and delete videos.

## API Design

The API follows a RESTful design with the following endpoints:

- `POST /videos`: Create a new video.
- `GET /videos`: Get all videos.
- `GET /videos/:id`: Get a specific video by ID.
- `DELETE /videos/:id`: Delete a video by ID.
- `POST /annotations`: Create a new annotation.
- `GET /annotations/video/:videoId`: Get all annotations for a specific video.
- `GET /annotations/:id`: Get a specific annotation by ID.
- `PUT /annotations/:id`: Update an annotation by ID.
- `DELETE /annotations/:id`: Delete an annotation by ID.

Each endpoint is documented with its purpose and parameters.

## How to Test

### Prerequisites
- Node.js and npm installed
- SQLite installed (if testing with a local database)

### Steps

1. Clone the repository:

   ```bash
   https://github.com/eslylescano/papercup-task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd papercup-task
   ```
3. Install dependencies::

   ```bash
   npm install
   ```
4. Start the server:

   ```bash
   npm run dev
   ```
5. Use an API testing tool (e.g., Postman, curl) to test the endpoints.

# Docker Usage

This section explains how to build and run the Video Annotation API using Docker containers.

## Prerequisites

- Docker installed on your machine

## Dockerfile

The Dockerfile in the root directory of the project defines the configuration for building the Docker image.

1. Create image:

   ```bash
   docker build -t papercup-task .
   ```
1. Run image:
   ```bash
   docker run -p 3000:3000 papercup-task

   ```

# Video Annotation API Design Explanation

## Design Principles

1. **RESTful Architecture**: The application follows REST principles, using HTTP methods for CRUD operations on resources.

2. **Separation of Concerns**: Codebase is organized into separate modules for routes, models, middleware, and utilities.

3. **Model-View-Controller (MVC) Pattern**: Loosely follows MVC pattern, with models representing data, views as API endpoints, and controllers handling logic.

4. **Asynchronous JavaScript**: Uses promises or async/await for database operations and asynchronous tasks.

## Components

1. **Routes**: Modules defining API endpoints for videos and annotations, delegating request handling to controllers.

2. **Models**: Modules defining data structures and database operations for videos and annotations.

3. **Middleware**: Modules defining middleware functions for request processing (e.g., apiKeyMiddleware).

4. **Utilities**: Modules providing helper functions across the application (e.g., database connection).

## Database

- Uses SQLite for storing videos and annotations.
- Database schema includes tables for videos and annotations with appropriate columns.

## Testing

- Application is testable, with unit tests covering individual functions and modules.
- Integration tests verify interaction between components using frameworks like Jest and Supertest.

## Scalability and Extensibility

- Designed to be scalable and extensible, allowing for easy addition of new features and support for a growing user base.
- Supports addition of new API endpoints and modification of database schema for new data requirements.

Overall, the initial design prioritizes modularity, maintainability, and performance, laying a solid foundation for future development and expansion.