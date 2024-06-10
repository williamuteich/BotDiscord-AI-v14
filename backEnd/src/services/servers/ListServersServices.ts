import prismaClient from "../../prisma";

class ListServersServices {
    async execute(){
        const servers = await prismaClient.server.findMany()

        return {message: "Todos os servidores foram listados com sucesso.", servers}
    }
}

export { ListServersServices };