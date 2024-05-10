import { Injectable } from '@nestjs/common';
import { CreateTasksStatusDto } from './dto/create-tasks_status.dto';
import { UpdateTasksStatusDto } from './dto/update-tasks_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksStatus } from './entities/tasks_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksStatusService {

  constructor(
    @InjectRepository(TasksStatus)
    private tasksSatusRepository: Repository<TasksStatus>
  ){}

  create(createTasksStatusDto: CreateTasksStatusDto) {
    return this.tasksSatusRepository.save(createTasksStatusDto);
  }

  findAll() {
    return this.tasksSatusRepository.find();
  }

  findOne(id: number) {
    return this.tasksSatusRepository.findOneBy({ id });
  }

  update(id: number, updateTasksStatusDto: UpdateTasksStatusDto) {
    return this.tasksSatusRepository.update({ id },updateTasksStatusDto);
  }

  remove(id: number) {
    return this.tasksSatusRepository.delete({ id });
  }
}
