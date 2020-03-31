const express = require('express');

const OngController = require('./controllers/OngControllers');
const IncidentControllers = require('./controllers/IncidentControllers');
const ProfileControllers = require ('./controllers/ProfileControllers');
const SessionControllers = require ('./controllers/SessionControllers');


const routes = express.Router();

routes.post('/sessions', SessionControllers.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileControllers.index);

routes.post('/incidents', IncidentControllers.create);
routes.get('/incidents', IncidentControllers.index);
routes.delete('/incidents/:id', IncidentControllers.delete);
  

module.exports = routes;
