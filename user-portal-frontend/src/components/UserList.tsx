import React from 'react';
import { User } from '../model/user';
import { StyledEvenTableRow, StyledOddTableRow, StyledTable, StyledTableCell, StyledMessageCopy } from './styled';
import { formatDOB } from '../util/dateFormatter';


const UserList = (props: UserListProps) => {
    const { users, hasSearched } = props;
    
    if (!hasSearched) return <StyledMessageCopy>Welcome to the User Portal! Please enter your criteria and search for users using the form above.</StyledMessageCopy>

    if (!users || users.length === 0) return <StyledMessageCopy>No users found for query.</StyledMessageCopy>

    return (
        <StyledTable>
            <thead>
                <tr>
                <th>User Name</th>
                <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User, index: number) => {
                    if (index % 2 === 0) {
                        return (
                            <StyledEvenTableRow key={`user-row-${index}`}>
                                <StyledTableCell>{user.name}</StyledTableCell>
                                <StyledTableCell>{formatDOB(user.dob)}</StyledTableCell>    
                            </StyledEvenTableRow>
                        )
                    }
                    return (
                        <StyledOddTableRow key={`user-row-${index}`}>
                            <StyledTableCell>{user.name}</StyledTableCell>
                            <StyledTableCell>{formatDOB(user.dob)}</StyledTableCell>
                        </StyledOddTableRow>
                    )
                })}
            </tbody>
        </StyledTable>
    );
}

export interface UserListProps {
    users: User[] | null;
    hasSearched: boolean;
}

export default UserList;
