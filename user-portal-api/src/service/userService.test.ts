import { findUsers } from './userService';
const typeormMock = require('typeorm');

test('Find Users with no args', async () => {
    // Given the application has a connection to the database.
    const users = [{
        id: '123',
        name: 'Bob',
        dob: new Date('1965-08-03'),
        events: []
    }];
    const andWhereMock = jest.fn().mockReturnThis();
    const fakeQueryBuilder = jest.fn().mockReturnValue({
        innerJoinAndSelect: jest.fn().mockReturnThis(),
        andWhere: andWhereMock,
        getMany: jest.fn().mockResolvedValue(users)
    });
    typeormMock.getConnection = jest.fn().mockReturnValue({
        getRepository: jest.fn().mockReturnValue({ createQueryBuilder: fakeQueryBuilder })
    });

    // When the service looks up users with no extra args.
    const results = await findUsers(typeormMock.getConnection(), {});

    // Then no additional where clauses are added to the query.
    expect(results).toBe(users);
    expect(andWhereMock).not.toHaveBeenCalled();
});

test('Find Users with args', async () => {
    // Given the application has a connection to the database.
    const users = [{
        id: '123',
        name: 'Bob',
        dob: new Date('1965-08-03'),
        events: []
    }];
    const andWhereMock = jest.fn().mockReturnThis();
    const fakeQueryBuilder = jest.fn().mockReturnValue({
        innerJoinAndSelect: jest.fn().mockReturnThis(),
        andWhere: andWhereMock,
        getMany: jest.fn().mockResolvedValue(users)
    });
    typeormMock.getConnection = jest.fn().mockReturnValue({
        getRepository: jest.fn().mockReturnValue({ createQueryBuilder: fakeQueryBuilder })
    });

    // When the service looks up users with extra args.
    const results = await findUsers(typeormMock.getConnection(), {excludeCategories: 'A', includeCategories: 'B', includeCodes: 'E654', excludeCodes: 'D987'});

    // Then the appropriate number of where clauses are added to the query
    expect(results).toBe(users);
    expect(andWhereMock).toBeCalledTimes(4);
});

test('Find Users error', async () => {
    // Given the application has a bad connection to the database
    typeormMock.getConnection = jest.fn().mockReturnValue({
        getRepository: jest.fn(() => { throw new Error('error!') })
    });

    // When the service attempts to look up users
    // Then an error is thrown
    expect(findUsers(typeormMock.getConnection(), {})).rejects.toThrow();
});
