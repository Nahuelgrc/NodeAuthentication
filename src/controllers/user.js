const { v4: uuidv4 } = require("uuid");

function user(fastify, options, done) {
  fastify.post("/login", async (req, reply) => {
    reply.send(`${uuidv4()}`);
  });

  fastify.post("/register", async (req, reply) => {
    
  });

  done();
}

module.exports = user;
