import neo4j from "neo4j-driver";
import { neo4jConfig } from "../config/neo4jConfig";

const driver = neo4j.driver(
  `${neo4jConfig.protocol}://${neo4jConfig.host}:${neo4jConfig.port}`,
  neo4j.auth.basic(neo4jConfig.dbUser, neo4jConfig.dbPassword),
  { encrypted: false}
);

export const session = driver.session();