import React from 'react';
import FollowerItem from './FollowerItem';

const Followers = ({ userfollowers }) => {
  return (
    <div>
      <h1 className='bg-orange-200 text-center font-bold pt-4'>Followers</h1>
      {userfollowers.map((userfollower) => (
        <FollowerItem userfollower={userfollower} key={userfollower.id} />
      ))}
    </div>
  );
};

export default Followers;
