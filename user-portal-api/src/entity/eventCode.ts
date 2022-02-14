import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class EventCode {
    @PrimaryColumn('uuid')
    eventCodeId: string;

    @Column('varchar')
    description: string;
}