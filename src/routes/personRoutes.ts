import { Router } from 'express';
import PersonController from '../controllers/personController';
import PersonService from '../services/personService';
import { session } from '../services/db';

const personService = new PersonService(session);
const personController = new PersonController(personService);

export function setRoutes(app: Router) {
    app.get('/persons', personController.getAllPersons.bind(personController));
    app.post('/persons', personController.createPerson.bind(personController));
    app.get('/persons/:id', personController.getPerson.bind(personController));
    app.put('/persons/:id', personController.updatePerson.bind(personController));
    app.delete('/persons/:id', personController.deletePerson.bind(personController));
    app.post('/persons/relationship', personController.createRelationship.bind(personController));
}