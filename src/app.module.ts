import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskCategory } from './task_categories/entities/task_category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '09092486?',
    database: 'apicul',
    entities: [User, TasksStatus, TaskCategory],
    synchronize: true,
  }), UserModule, TasksStatusModule, TaskCategoriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
