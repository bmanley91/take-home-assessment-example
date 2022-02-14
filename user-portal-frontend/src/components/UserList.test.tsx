import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('The UserList renders all users passed in', () => {
    // Given a list of users has been retrieved from the backend
    const users = [{
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

    // When the UserList is rendered
    render(<UserList users={ users } hasSearched={ true } />);

    // Then there should be a record for each user
    users.forEach((user) => {
        expect(screen.getByText(user.name)).toBeInTheDocument();
    })
})
