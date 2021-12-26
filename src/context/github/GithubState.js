import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_USER_FOLLOWERS,
} from '../types';
import axios from 'axios';

//for deployment 
let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    userfollowers: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Github Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //get single github user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get user's repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //get user followers
  const getUserFollowers = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/followers?per_page=3&client_id=${githubClientID}&client_Secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER_FOLLOWERS,
      payload: res.data,
    });
  };

  //clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        userfollowers: state.userfollowers,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        getUserFollowers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
