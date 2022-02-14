import React, { useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { User } from './model/user';
import { StyledErrorMessage, StyledHeader } from './components/styled';

function App() {
  const [users, setUsers] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const waitForAndSetUsers = (userPromise: Promise<User>): void => {
    setHasSearched(true);
    setHasErrored(false);
    userPromise.then(resolvedUsers => {
      setUsers(resolvedUsers)
      }).catch((error) => {
        console.error(error);
        setHasErrored(true);
      });
  }

  return (
    <div className='App'>
      <div className='container'>
        <StyledHeader>User Portal</StyledHeader>
      </div>
      <UserForm usersCallback={ waitForAndSetUsers } />
      <div className='user-container'>
        { hasErrored ? 
          <StyledErrorMessage>We encountered an error while trying to look up users.</StyledErrorMessage> : 
          <UserList users={users} hasSearched={hasSearched} />
        }
        
      </div>
    </div>
  );
}

export default App;
