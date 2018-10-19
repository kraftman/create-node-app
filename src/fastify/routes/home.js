'use strict';


const homeRoute = async (fastify) => {
  fastify.get('/', async () => {
    return 'ready'
  })
}

module.exports = homeRoute