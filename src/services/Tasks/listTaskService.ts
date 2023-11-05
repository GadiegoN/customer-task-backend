import prismaClient from "../../prisma";

class ListTaskService {
    async execute() {
        const tasks = await prismaClient.task.findMany()

        return tasks
    }
}

export { ListTaskService }