import prismaClient from "../../prisma";

interface CreateUsersInterace {
    name: string;
    last_name: string
    email: string
    cpf: string
    phone: string
    discordUserID: string
}

class CreateUsersServices {
    async execute({name, last_name, email, cpf, phone, discordUserID}: CreateUsersInterace){

        if (!name || !last_name || !email || !cpf || !phone || !discordUserID) {
            throw new Error("Todos os campos devem ser preenchidos.");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                last_name,
                email,
                active: true,
                cpf,
                phone,
                discordUserID
            }
        })
  
        return {message: "Usuário criado com sucesso.", user}
    }
}

export { CreateUsersServices }