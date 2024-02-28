'use strict'

const vidController = require('../../controller/vidController');

module.exports = async function (fastify, opts) {
  fastify.get('/api/vidRoute', vidController.getAllVidData);
  fastify.post('/api/vidRoute', vidController.addNewVidData);
};
