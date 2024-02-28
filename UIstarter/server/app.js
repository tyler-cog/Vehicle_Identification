'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const { default: mongoose } = require('mongoose')
console.log(process.env.MONGODB_URI)
try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.error(`You are not connected to your database! ${e}`);
}

module.exports = async function (fastify, opts) {

    // "deprecated? / cant find"
  fastify.register(require('@fastify/cors'), {
    // origin: (origin, cb) => {
    //   const hostname = new URL(origin).hostname
    //   if(hostname === "localhost"){
    //     //  Request from localhost will pass
    //     cb(null, true)
    //     return
    //   }
    //   // Generate an error on other origins, disabling access
    //   cb(new Error("Not allowed"), false)
    // }
  })
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

