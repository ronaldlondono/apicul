import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
}
