import prismaClient from "../../prisma";

class DeleteServersServices {
    async execute( id: string){
        if(!id){
            throw new Error("O ID do servidor deve ser informado.");
        }

        const findServer = await prismaClient.server.findUnique({
            where: {id}
        })

        if(!findServer){
            throw new Error("Servidor não encontrado.");
        }

        await prismaClient.server.delete({
            where: {
                id: findServer.id
            }
        })

        return { message: "Servidor deletado com sucesso." }
    }
}

export { DeleteServersServices };