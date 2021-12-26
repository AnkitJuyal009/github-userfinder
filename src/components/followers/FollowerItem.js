import React from 'react';

const FollowerItem = ({ userfollower, id }) => {
  return (
    <div className='flex items-center gap-x-5 px-6 pt-4 pb-2 bg-orange-200'>
      <img
        src={userfollower.avatar_url}
        alt='userfollower picture'
        className='rounded-full w-16'
      />
      <div className='flex flex-col'>
        <h3>{userfollower.login}</h3>
        <a href={userfollower.html_url} className='font-light text-sm'>
          {userfollower.html_url}
        </a>
      </div>
    </div>
  );
};

export default FollowerItem;
