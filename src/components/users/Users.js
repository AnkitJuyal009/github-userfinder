import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
