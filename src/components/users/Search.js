import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter user', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='mt-12'>
      <form
        onSubmit={onSubmitHandler}
        className='flex justify-center items-center flex-col gap-7'
      >
        <input
          className='w-full max-w-3xl focus:outline-none border-2 border-gray-300 rounded-md px-3 py-1'
          type='text'
          name='text'
          placeholder='Search users..'
          value={text}
          onChange={onChangeHandler}
        />

        <div className='flex item-center gap-4'>
          <input
            type='submit'
            value='Search'
            className='bg-green-600 text-white px-7 py-2 font-medium rounded-md hover:bg-green-500'
          />
          {githubContext.users.length > 0 && (
            <button
              className='bg-red-600 text-white px-9 py-2 font-medium rounded-md hover:bg-red-300'
              onClick={githubContext.clearUsers}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
