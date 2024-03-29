import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const f = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

f.register(fastifyStatic, {
  root: join(__dirname, "../build"),
});

f.get('/hello', (request, reply) => {
  reply.send({ message: 'Hello world' });
});


const port = process.env.PORT || 3212;
const host = process.env.HOST || "localhost";

f.listen({ port, host })
  .then((adress) => console.log("server started at " + adress))
  .catch((err) => {
    console.log("Error " + err);
  });
