export class PersonService {
    private session: any;

    constructor(neo4jSession: any) {
        this.session = neo4jSession;
    }

    async getAllPersons() {
        const result = await this.session.run('MATCH (p:Person) RETURN p');
        return result.records.map((record: any) => record.get('p').properties);
    }

    async createPerson(name: string, age: number, email: string) {
        const query = 'CREATE (p:Person {name: $name, age: $age, email: $email}) RETURN p';
        const result = await this.session.run(query, { name, age, email });
        return result.records[0].get('p').properties;
    }

    async getPerson(id: string) {
        const query = 'MATCH (p:Person) WHERE id(p) = $id RETURN p';
        const result = await this.session.run(query, { id: parseInt(id) });
        return result.records.length ? result.records[0].get('p').properties : null;
    }

    async updatePerson(id: string, name: string, age: number) {
        const query = 'MATCH (p:Person) WHERE id(p) = $id SET p.name = $name, p.age = $age RETURN p';
        const result = await this.session.run(query, { id: parseInt(id), name, age });
        return result.records.length ? result.records[0].get('p').properties : null;
    }

    async deletePerson(id: string) {
        const query = 'MATCH (p:Person) WHERE id(p) = $id DELETE p';
        await this.session.run(query, { id: parseInt(id) });
        return { message: 'Person deleted successfully' };
    }
}