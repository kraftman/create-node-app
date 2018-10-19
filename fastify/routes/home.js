'use strict';


const homeRoute = (fastify) => {
  fastify.get('/', async () => {
    return 'ready'
  })
}

module.exports = homeRoute