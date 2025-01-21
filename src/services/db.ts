import neo4j from 'neo4j-driver';
import { neo4jConfig } from '../config/neo4jConfig';

console.log(
    `Connecting to Neo4j at ${neo4jConfig.protocol}://${neo4jConfig.host}:${neo4jConfig.port} with user ${neo4jConfig.dbUser}`
);

const driver = neo4j.driver(
    `${neo4jConfig.protocol}://${neo4jConfig.host}:${neo4jConfig.port}`,
    neo4j.auth.basic(neo4jConfig.dbUser, neo4jConfig.dbPassword),
    { encrypted: 'ENCRYPTION_OFF' }
);

driver
    .verifyConnectivity()
    .then(() => console.log('Neo4j connection established'))
    .catch((error) => console.error('Neo4j connection error:', error));

export const session = driver.session();
