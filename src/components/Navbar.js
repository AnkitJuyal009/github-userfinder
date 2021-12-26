import React from 'react';
import {BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between items-center shadow-md px-10 py-4'>
      <h1 className='flex items-center gap-2 cursor-pointer'>{<BsGithub/>}Github UserFinder</h1>
      <ul className='flex gap-8'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
