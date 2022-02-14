import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEvent } from './userEvent';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('datetime')
    dob: Date;

    @OneToMany(() => UserEvent, event => event.user)
    events: Event[];
}
