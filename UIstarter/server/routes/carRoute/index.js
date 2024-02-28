'use strict'

const carController = require('../../controller/carController');

module.exports = async function (fastify, opts) {
  fastify.get('/api/carRoute', carController.getAllData);
  fastify.post('/api/carRoute', carController.addNewData);
};
