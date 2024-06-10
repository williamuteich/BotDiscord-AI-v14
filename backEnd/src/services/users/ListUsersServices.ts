import prismaClient from "../../prisma";

class ListeUsersServices {
    async execute(){
        const users = await prismaClient.user.findMany()
        
        return {message: "Todos os usuários foram listados com sucesso.", users}
    }
}

export { ListeUsersServices };