class PersonService {
    constructor(private session: any) {}

    async getAllPersons() {
        const result = await this.session.run('MATCH (p:Person) RETURN p');
        return result.records.map((record: any) => record.get('p').properties);
    }

    async createPerson(name: string, age: number, email: string) {
        const result = await this.session.run(
            'CREATE (p:Person { name: $name, age: $age, email: $email}) RETURN p',
            { name, age, email }
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
}

export default PersonService;