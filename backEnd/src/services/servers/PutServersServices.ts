import prismaClient from "../../prisma";

interface createServerRequest {
    id: string;
    serverName: string;
}

class PutServersServices {
    async execute({id, serverName}: createServerRequest){

        const server = await prismaClient.server.findUnique({ where: {id}});

        if(!server){
            throw new Error("Servidor não encontrado.");
        }

        const updateUser = await prismaClient.server.update({
            where: {id},
            data: {
                serverName
            }
        })

        return {message: "Dados Do Servidor Atualizados Com Sucesso.", updateUser}
    }
}

export { PutServersServices };   