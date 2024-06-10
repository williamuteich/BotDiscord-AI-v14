import { FastifyRequest, FastifyReply } from "fastify";
import { ListeUsersServices } from "../../services/users/ListUsersServices";

class ListUsersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listeUsersServices = new ListeUsersServices();
        const users = await listeUsersServices.execute();
        
        return reply.send(users);
    }
}

export { ListUsersControllers };