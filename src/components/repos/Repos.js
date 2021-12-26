import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div>
        <h1 className='bg-green-200 text-center font-bold pt-4 mt-4'>Repos</h1>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
