import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTasksService } from "../../services/Tasks/createTaskService";

class CreateTasksController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { title, description, completed, customerId } = request.body as { title: string, description?: string, completed?: boolean, customerId: string }

        const taskService = new CreateTasksService()
        const task = await taskService.execute({title, description, completed, customerId})

        reply.send(task)
    }
}

export { CreateTasksController }