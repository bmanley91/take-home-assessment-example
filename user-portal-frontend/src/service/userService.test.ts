import { fetchUsers } from './userService';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => fetchMock.resetMocks());

const usersFromBackend = [{
    id: '123',
    name: 'Bob',
    dob: '1965-08-03',
    events: []
}, {
    id: '123',
    name: 'Alice',
    dob: '1991-09-04',
    events: []
}];

test('User Service Test', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(usersFromBackend));

    const results = await fetchUsers({});

    expect(results).toEqual(usersFromBackend);
});
