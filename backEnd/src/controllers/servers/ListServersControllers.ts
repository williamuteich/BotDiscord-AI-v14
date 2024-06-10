import { FastifyRequest, FastifyReply } from "fastify";
import { ListServersServices } from "../../services/servers/ListServersServices";

class ListServersControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const listServersServices = new ListServersServices();
        const servers =  await listServersServices.execute()

        return reply.send(servers)
    }
}

export {ListServersControllers}