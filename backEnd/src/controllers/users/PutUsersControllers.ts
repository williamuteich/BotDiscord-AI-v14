import { FastifyRequest, FastifyReply } from "fastify";
import { PutUserServices } from "../../services/users/PutUserServices";

interface PutUsersControllersInterface {
    id: string;
    name: string;
    last_name: string
    email: string
    cpf: string
    phone: string
    discordUserID: string

}

class PutUsersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const responseBody = request.body as PutUsersControllersInterface;
        const putUsersServices = new PutUserServices();

        const user = await putUsersServices.execute(responseBody);

        reply.send(user)
    }
}

export { PutUsersControllers };