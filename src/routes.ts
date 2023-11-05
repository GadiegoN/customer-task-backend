import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomerController } from "./controllers/listCustomerController";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";
import { CreateTasksController } from "./controllers/Tasks/createTasksController";
import { ListTaskController } from "./controllers/Tasks/listTaskController";
import { DeleteTaskController } from "./controllers/Tasks/deleteTaskController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

    fastify.post("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTasksController().handle(request, reply)
    })
    
    fastify.get("/tasks", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListTaskController().handle(request, reply)
    })
    
    fastify.delete("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTaskController().handle(request, reply)
    })
}