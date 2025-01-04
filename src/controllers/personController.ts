import { Request, Response } from 'express';
import PersonService from '../services/personService';

class PersonController {
    constructor(private personService: PersonService) {}

    async getAllPersons(req: Request, res: Response) {
        try {
            const persons = await this.personService.getAllPersons();
            res.status(200).json(persons);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async createPerson(req: Request, res: Response) {
        try {
            const { name, age, email } = req.body;
            const newPerson = await this.personService.createPerson(name, age, email);
            res.status(201).json(newPerson);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getPerson(req: Request, res: Response) {
        try {
            const personId = req.params.id;
            const person = await this.personService.getPerson(personId);
            if (person) {
                res.status(200).json(person);
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updatePerson(req: Request, res: Response) {
        try {
            const personId = req.params.id;
            const { name, age, email } = req.body;
            const updatedPerson = await this.personService.updatePerson(personId, name, age, email);
            if (updatedPerson) {
                res.status(200).json(updatedPerson);
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async deletePerson(req: Request, res: Response) {
        try {
            const personId = req.params.id;
            const deleted = await this.personService.deletePerson(personId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async createRelationship(req: Request, res: Response) {
        try {
            const { personId1, personId2, relationshipType } = req.body;
            const relationship = await this.personService.createRelationship(personId1, personId2, relationshipType);
            res.status(201).json(relationship);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default PersonController;