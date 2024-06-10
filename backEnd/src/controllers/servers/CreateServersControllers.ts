import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServersServices } from "../../services/servers/CreateServersServices";

interface createServerRequest {
    discordServerID: string;
    serverName: string;
}

class CreateServersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const responseBody = request.body as createServerRequest;
        const createServersServices = new CreateServersServices();

        const response = await createServersServices.execute(responseBody);

        reply.send(response);
    }
}

export { CreateServersControllers };