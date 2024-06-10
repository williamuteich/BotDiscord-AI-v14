import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteServersServices } from "../../services/servers/DeleteServersServices";

class DeleteServersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string};
        const deleteServersServices = new DeleteServersServices();
        const response = await deleteServersServices.execute(id);

        return reply.send(response)
    }
}

export { DeleteServersControllers };