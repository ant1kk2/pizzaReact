import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import pizzas from "./pizzas.js";
import coffes from "./coffes.js";
import discount from "./discount.js";

const f = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

f.register(fastifyStatic, {
  root: join(__dirname, "../build"),
});

f.get("/pizzas", (request, reply) => {
  reply.send({pizzas, discount});
});

f.get("/coffes", (request, reply) => {
  reply.send(coffes);
});

f.setNotFoundHandler(async (request, reply) => {
  try {
    const indexHtml = await readFile(
      join(__dirname, "../build/index.html"),
      "utf-8"
    );
    reply.type("text/html").send(indexHtml);
  } catch (error) {
    reply.code(500).send({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3212;
const host = process.env.HOST || "localhost";

f.listen({ port, host })
  .then((adress) => console.log("server started at " + adress))
  .catch((err) => {
    console.log("Error " + err);
  });
