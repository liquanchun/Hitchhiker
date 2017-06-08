import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Schedule } from "./schedule";

@Entity()
export class ScheduleRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Schedule, schedule => schedule.ScheduleRecords)
    schedule: Schedule;

    @Column()
    duration: number;

    @Column()
    result: string;

    @Column()
    success: boolean;

    @Column()
    isScheduleRun: boolean;

    @CreateDateColumn()
    createDate: Date;
}