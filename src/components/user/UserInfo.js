import React, { useContext } from 'react';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import GithubContext from '../../context/github/githubContext';

const UserInfo = () => {
  const githubContext = useContext(GithubContext);
  const { user } = githubContext;

  const { followers, following, public_repos, public_gists } = user;

  const items = [
    {
      id: 1,
      icon: <GoRepo size={25} color='#da4a91'/>,
      label: 'repos',
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers size={25} color='#2caeba' />,
      label: 'followers',
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus size={25} color='#5d55fa' />,
      label: 'following',
      value: following,
    },
    {
      id: 4,
      icon: <GoGist size={25} color='#f0b429' />,
      label: 'gists',
      value: public_gists,
    },
  ];

  return (
    <section className='section'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value }) => {
  return (
    <article className='grid grid-cols-2 bg-blue-200 place-items-center py-3 rounded-md hover:shadow-lg'>
      <span className='rounded-full bg-white p-2'>{icon}</span>
      <div>
        <div className='flex flex-col items-center'>
          <h3 className='text-3xl'>{value}</h3>
          <p className='text-sm'>{label}</p>
        </div>
      </div>
    </article>
  );
};

export default UserInfo;
