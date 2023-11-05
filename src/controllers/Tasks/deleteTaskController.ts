import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskService } from "../../services/Tasks/deleteTaskService";

class DeleteTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }

        const taskService = new DeleteTaskService()

        const task = await taskService.execute({ id })

        reply.send(task)
    }
}

export { DeleteTaskController }