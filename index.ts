import Fastify from 'fastify';
import './database/connection';

const fastify = Fastify();

fastify.listen({ port: 3000 }, function(err, address) { 
    if (err) {
        fastify.log.error(err);
        process.exit(1)
    }

    console.log('Server is now listening on', address);
}) 