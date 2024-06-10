import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUsersServices } from "../../services/users/CreateUsersServices";

interface CreateUserRequestBody {
    name: string;
    last_name: string;
    email: string;
    cpf: string;
    phone: string;
    discordUserID: string;
}

class CreateUsersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const requestBody = request.body as CreateUserRequestBody;
        const createUsersServices = new CreateUsersServices();
        const response = await createUsersServices.execute(requestBody);
        
        reply.send(response);
    }
}

export { CreateUsersControllers }
