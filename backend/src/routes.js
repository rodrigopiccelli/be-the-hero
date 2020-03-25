const express = require("express");
const OngController = require("./controllers/OngController");
const IndicentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IndicentsController.create);
routes.get('/incidents', IndicentsController.index);
routes.delete('/incidents/:id', IndicentsController.delete)
module.exports = routes;