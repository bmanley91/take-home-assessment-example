import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EventCode } from "./eventCode";
import { User } from './user';

export type EventCodeCategory = 'A' | 'B' | 'C' | 'D';

@Entity()
export class UserEvent {
    @PrimaryGeneratedColumn("uuid")
    eventId: string;

    @ManyToOne(() => User, user => user.events)
    user: User;

    @ManyToOne(() => EventCode)
    eventCode: EventCode;

    @Column({
        type: 'enum',
        enum: ['A', 'B', 'C', 'D']
    })
    category: EventCodeCategory;

    @Column('datetime')
    eventDate: Date;
}
