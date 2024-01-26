import React from 'react';

export default function Input({ label = 'Search', setValue = (e: any) => {} }) {
  return (
    <div className='flex gap-5'>
      <input
        className='
          border-2
          border-gray-300
          rounded-md
          p-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          focus:border-transparent
          '
        type='checkbox'
        id={label}
        onChange={(e) => setValue(e.target.checked)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
