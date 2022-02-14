import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UserForm from './UserForm';
import { User } from '../model/user';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const usersFromBackend = [{
    id: '123',
    name: 'Bob',
    dob: new Date('1965-08-03'),
    events: []
}, {
    id: '123',
    name: 'Alice',
    dob: new Date('1991-09-04'),
    events: []
}];

const server = setupServer(
    rest.get('/users', (req, res, ctx) => {
        return res(ctx.json(usersFromBackend));
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('The UserForm uses the user service to retrieve users.', () => {
    let users = [];
    const callback = (userPromise) => {
        userPromise.then((returnedUsers: User[]) => users = returnedUsers);
    }

    const { getByTestId } = render(<UserForm usersCallback={ callback } />)
    fireEvent.submit(getByTestId('form'));

    setTimeout(() => {
        expect(users).toEqual(usersFromBackend);
    }, 1500);
});
