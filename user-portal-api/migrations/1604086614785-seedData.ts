import {MigrationInterface, QueryRunner} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class seedData1604086614785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert events
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('A123', 'Description for A123');");
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('B456', 'Description for B456');");
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('C789', 'Description for C789');");
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('D987', 'Description for D987');");
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('E654', 'Description for E654');");
        await queryRunner.query("INSERT INTO event_code (eventCodeId, description) VALUES ('F321', 'Description for F321');");

        // Insert alice and their events
        const aliceUUID = uuidv4();
        await queryRunner.query(`INSERT INTO user (id, name, dob) VALUES ('${aliceUUID}', 'Alice', '1987-10-01');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${aliceUUID}', 'C', 'A123', '2019-01-01');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${aliceUUID}', 'B', 'B456', '2019-01-01');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${aliceUUID}', 'A', 'A123', '2019-01-01');`);

        // Insert bob and their events
        const bobUUID = uuidv4();
        await queryRunner.query(`INSERT INTO user (id, name, dob) VALUES ('${bobUUID}', 'Bob', '1972-09-02');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${bobUUID}', 'C', 'A123', '2019-03-27');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${bobUUID}', 'A', 'C789', '2019-03-07');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${bobUUID}', 'C', 'D987', '2019-03-07');`);
        
        // Insert cindy and their events
        const cindyUUID = uuidv4();
        await queryRunner.query(`INSERT INTO user (id, name, dob) VALUES ('${cindyUUID}', 'Cindy', '1965-08-03');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${cindyUUID}', 'B', 'E654', '2019-07-13');`);


        const danUUID = uuidv4();
        await queryRunner.query(`INSERT INTO user (id, name, dob) VALUES ('${danUUID}', 'Dan', '1956-07-04');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${danUUID}', 'D', 'F321', '2019-07-13');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${danUUID}', 'A', 'B456', '2019-07-13');`);
        await queryRunner.query(`INSERT INTO user_event (eventId, userId, category, eventCodeEventCodeId, eventDate) VALUES ('${uuidv4()}', '${danUUID}', 'C', 'D987', '2019-07-13');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM user_event;');
        await queryRunner.query('DELETE FROM user;');
        await queryRunner.query('DELETE FROM event_code;');
    }

}
