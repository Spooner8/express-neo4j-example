# Express Neo4j API

This project is an Express API that interacts with a Neo4j graph database to perform CRUD operations for persons. 

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/spooner8/express-neo4j-example.git
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

***Nodes***

- **POST /persons**: Create a new person. -> json {name, age, email}
- **GET /persons**: Retrieve all person nodes.
- **GET /persons/:id**: Retrieve a person by ID.
- **PUT /persons/:id**: Update a person by ID.
- **DELETE /persons/:id**: Delete a person by ID.

***Relationships***

- **POST /persons/relationship**: Create a new relationship. json -> {personId1, personId2, relationshipType}

## Docker

To run the application using Docker, follow these steps:

1. Update the docker.compose.yml
   Set api image to your build name (recommendet -> express-neo4j-example)
   Set connection conditions to the conditions in your neo4jConfig.ts (db and api)

2. Build the Docker image:
   ```
   docker build -t express-neo4j-example .
   ```

3. Start the services using Docker Compose:
   ```
   docker-compose up -d
   ```

The application and Neo4j database will be running as container stack.

## License

This project is licensed under the MIT License.