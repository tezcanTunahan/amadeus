import React from 'react';
import DateTime from './DateTime';

export default function Navbar() {
  return (
    <div className='w-full items-center justify-between px-10 bg-blue-200 text-gray-700 min-h-48 flex '>
      <div className=''>
        for{' '}
        <a
          href='https://amadeus.com/en'
          className='text-3xl font-semibold  inline hover:text-black'>
          amadeus
        </a>
        <h3 className='text-gray-500'>
          Created by{' '}
          <a
            href='https://www.tunahantezcan.com/'
            target='_blank'
            className='hover:text-black'>
            tunahan tezcan
          </a>
        </h3>
      </div>
      <DateTime />
    </div>
  );
}
