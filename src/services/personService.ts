import { Session } from 'neo4j-driver';
import { v4 as uuidv4 } from 'uuid';

class PersonService {
    constructor(private session: Session) {}

    async getAllPersons() {
        const result = await this.session.run('MATCH (p:Person) RETURN p');
        return result.records.map((record: any) => record.get('p').properties);
    }

    async createPerson(name: string, age: number, email: string) {
        const id = uuidv4();
        const result = await this.session.run(
            'CREATE (p:Person {id: $id, name: $name, age: $age, email: $email}) RETURN p',
            { id, name, age, email }
        );
        return result.records[0].get('p').properties;
    }

    async getPerson(personId: string) {
        const result = await this.session.run(
            'MATCH (p:Person {id: $personId}) RETURN p',
            { personId }
        );
        return result.records.length > 0 ? result.records[0].get('p').properties : null;
    }

    async updatePerson(personId: string, name: string, age: number, email: string) {
        const result = await this.session.run(
            'MATCH (p:Person {id: $personId}) SET p.name = $name, p.age = $age, p.email = $email RETURN p',
            { personId, name, age, email }
        );
        return result.records.length > 0 ? result.records[0].get('p').properties : null;
    }

    async deletePerson(personId: string) {
        const result = await this.session.run(
            'MATCH (p:Person {id: $personId}) DELETE p RETURN COUNT(p) AS deletedCount',
            { personId }
        );
        return result.records[0].get('deletedCount') > 0;
    }

    async createRelationship(personId1: string, personId2: string, relationshipType: string) {
        const result = await this.session.run(
            'MATCH (a:Person {id: $personId1}), (b:Person {id: $personId2}) ' +
            'CREATE (a)-[r:' + relationshipType + ']->(b) RETURN r',
            { personId1, personId2 }
        );
        return result.records.length > 0 ? result.records[0].get('r').properties : null;
    }
}

export default PersonService;