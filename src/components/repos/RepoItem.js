import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const RepoItem = ({ repo, id }) => {
  return (
    <div className='bg-green-200 px-6 pb-3 py-2'>
      <h3 className='flex items-center gap-4'>
        <BsFillArrowRightCircleFill />
        <a className='font-normal' href={repo.html_url}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
