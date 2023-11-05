import prismaClient from "../../prisma";

interface createTasksProps {
      title: string;
      description?: string;
      completed?: boolean;
      customerId: string;
}

class CreateTasksService {
    async execute({
      title,
      description,
      completed,
      customerId,
    }: createTasksProps) {
      try {
        const task = await prismaClient.task.create({
          data: {
            title: title,
            description: description,
            completed: completed || false,
            customerId: customerId,
          },
        });
  
        return task;
      } catch (error) {
        throw new Error('Erro ao criar tarefa:')
      }
    }
  }
  
  export { CreateTasksService };