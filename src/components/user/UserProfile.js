import React, { useContext } from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import GithubContext from '../../context/github/githubContext';

const UserProfile = () => {
  const githubContext = useContext(GithubContext);
  const { user } = githubContext;
  const { name, login, bio, company, location, blog, avatar_url, html_url } = user;
  return (
    <div className='bg-red-200 px-6 py-4'>
      <h1 className='text-center font-bold'>User Profile</h1>
      <div className='flex justify-start items-center gap-x-8'>
        <img
          src={avatar_url}
          alt='user picture'
          className='rounded-full w-16'
        />
        <a href={html_url}>
          <h1 className='font-semibold text-md'>{name}</h1>
          <h2 className='font-light text-sm'>{login}</h2>
        </a>
      </div>

      <p className='font-light mt-2'>{bio && bio}</p>

      <h6 className='flex items-center gap-2 font-light'>
        {company && <MdBusiness />}{company}
      </h6>
      <h6 className='flex items-center gap-2 font-light'>
        {location && <MdLocationOn />}
        {location}
      </h6>
      <a
        href={`https://${blog}`}
        className='flex items-center gap-2 font-light cursor-pointer'
      >
        {blog && <MdLink />}
        {blog}
      </a>
    </div>
  );
};

export default UserProfile;
