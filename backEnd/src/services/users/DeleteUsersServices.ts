import prismaClient from "../../prisma";

class DeleteUsersServices {
    async execute(id: string){
        
        if(!id){
            throw new Error("O ID do usuário deve ser informado.")
        }


        const findUserClient = await prismaClient.user.findUnique({
            where: {id}
        })

        if(!findUserClient){
            throw new Error("Usuário não encontrado.")
        }

        await prismaClient.user.delete({
            where: {
                id: findUserClient.id
            }
        })

        return { message: "Usuário deletado com sucesso."}
    }
}

export {DeleteUsersServices}