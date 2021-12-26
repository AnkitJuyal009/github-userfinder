import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ id, user }) => {
  return (
    <Link
      to={`/user/${user.login}`}
      className='py-3 mt-5 max-w-sm rounded overflow-hidden shadow text-center hover:shadow-lg'
    >
      <img
        src={user.avatar_url}
        alt='user-avatar'
        className='rounded-full block m-auto w-24'
      />
      <h3 className='py-3 font-medium'>{user.login}</h3>
    </Link>
  );
};

export default UserItem;
