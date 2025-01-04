export interface Person {
    id?: string;
    name: string;
    age: number;
    email: string;
}

export class PersonModel {
    constructor(public person: Person) {}

    validate(): boolean {
        if (!this.person.name || !this.person.age || !this.person.email) {
            return false;
        }
        if (typeof this.person.age !== 'number' || this.person.age < 0) {
            return false;
        }
        return true;
    }
}