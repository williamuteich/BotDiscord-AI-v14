import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateUsersControllers } from "./controllers/users/CreateUsersControllers";
import { ListUsersControllers } from "./controllers/users/ListUsersControllers";
import { DeleteUsersControllers } from "./controllers/users/DeleteUsersControllers";
import { CreateServersControllers } from "./controllers/servers/CreateServersControllers";
import { ListServersControllers } from "./controllers/servers/ListServersControllers";
import { DeleteServersControllers } from "./controllers/servers/DeleteServersControllers";
import { PutUsersControllers } from "./controllers/users/PutUsersControllers";
import { PutServersControllers } from "./controllers/servers/PutServersConstrollers";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {

    //Tabelas de users
    
    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersControllers().handle(request, reply);
    });

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsersControllers().handle(request, reply);
    });

    fastify.put("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new PutUsersControllers().handle(request, reply);
    });

    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUsersControllers().handle(request, reply);
    });

    //tabela de servers

    fastify.get("/servers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListServersControllers().handle(request, reply);
    })

    fastify.post("/server", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateServersControllers().handle(request, reply);
    })

    fastify.put("/server", async (request: FastifyRequest, reply: FastifyReply) => {
        return new PutServersControllers().handle(request, reply);
    })

    fastify.delete("/server", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteServersControllers().handle(request, reply);
    })
}