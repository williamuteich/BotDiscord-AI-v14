import { FastifyRequest, FastifyReply } from "fastify";
import { PutServersServices } from "../../services/servers/PutServersServices";

interface createServerRequest {
    id: string;
    serverName: string;
}

class PutServersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const responseBody = request.body as createServerRequest;
        const putServersServices = new PutServersServices();

        const response = await putServersServices.execute(responseBody);

        reply.send(response);
    }
}

export { PutServersControllers };