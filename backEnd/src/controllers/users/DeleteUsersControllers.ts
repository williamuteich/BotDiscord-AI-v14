import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUsersServices } from "../../services/users/DeleteUsersServices";

class DeleteUsersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string};
        const userDeleteService = new DeleteUsersServices();
        const userDelete = await userDeleteService.execute(id);

        reply.send(userDelete);
    }
}

export { DeleteUsersControllers }