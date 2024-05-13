import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  address: string;
  @Column()
  phonenumber: string;
  @Column({
    unique: true
  })
  email: string;
  @Column({ default: true })
  isActive: boolean;
  @OneToMany(() => Task, task => task.user)
    tasks: Task[];
}