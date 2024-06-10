import prismaClient from "../../prisma";

interface PutUsersServicesInterface {
    id: string;
    name: string;
    last_name: string
    email: string
    cpf: string
    phone: string
}

class PutUserServices {
    async execute({id, name, last_name, email, cpf, phone, }: PutUsersServicesInterface){
        if(!id || !name || !last_name || !email || !cpf || !phone){
            throw new Error("Todos os campos devem ser preenchidos.")
        }

        const user = await prismaClient.user.findUnique({
            where: {id}
        })

        if(!user){
            throw new Error("Usuário não encontrado.")
        }

        const updateUser = await prismaClient.user.update({
            where: {id},
            data: {
                name,
                last_name,
                email,
                cpf,
                phone,
            }
        })

        return {message: "Usuário atualizado com sucesso.", updateUser}
    }
}

export { PutUserServices }