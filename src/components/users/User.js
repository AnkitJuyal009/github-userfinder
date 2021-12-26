import React, { useEffect, useContext } from 'react';
import Spinner from '../Spinner';
import GithubContext from '../../context/github/githubContext';
import UserInfo from '../user/UserInfo';
import UserProfile from '../user/UserProfile';
import Followers from '../followers/Followers';
import Repos from '../repos/Repos';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const {
    getUser,
    loading,
    repos,
    getUserRepos,
    getUserFollowers,
    userfollowers,
  } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    getUserFollowers(match.params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <UserInfo />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-4'>
        <UserProfile />
        <Followers userfollowers={userfollowers} />
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
