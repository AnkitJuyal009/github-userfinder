import React, { useContext } from 'react';
import { FcInfo } from 'react-icons/fc';
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;
  return (
    alert !== null && (
      <div
        className='flex items-center bg-gray-300 mt-6 px-5 py-2 rounded-md'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <FcInfo size={20} />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
