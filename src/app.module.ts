import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '09092486?',
    database: 'apicul',
    entities: [User, TasksStatus],
    synchronize: true,
  }), UserModule, TasksStatusModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
