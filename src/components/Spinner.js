import React, { Fragment } from 'react';
import spinner from '../image/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        className='w-44 m-auto block'
      />
    </Fragment>
  );
};

export default Spinner;
