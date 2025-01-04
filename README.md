# Express Neo4j API

This project is an Express API that interacts with a Neo4j graph database to perform CRUD operations for persons. 

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-neo4j-api.git
   cd express-neo4j-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Configure the Neo4j database connection in `src/config/neo4jConfig.ts`.

## Usage

To run the application, use the following command:
```
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- **POST /persons**: Create a new person.
- **GET /persons/:id**: Retrieve a person by ID.
- **PUT /persons/:id**: Update a person by ID.
- **DELETE /persons/:id**: Delete a person by ID.

## Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t express-neo4j-api .
   ```

2. Start the services using Docker Compose:
   ```
   docker-compose up
   ```

The application and Neo4j database will be running in containers.

## License

This project is licensed under the MIT License.