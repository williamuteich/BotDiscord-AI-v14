import prismaClient from "../../prisma";

interface createServerRequest {
    discordServerID: string;
    serverName: string;
}

class CreateServersServices {
    async execute({discordServerID, serverName}: createServerRequest){
        if ( !discordServerID || !serverName) {
            throw new Error("Todos os campos devem ser preenchidos.");
        }

        const server = await prismaClient.server.create({
            data: {
                discordServerID,
                serverName,
            }
        })

        return {message: "Dados Do Servidor Criado Com Sucesso.", server}
    }
}

export { CreateServersServices }