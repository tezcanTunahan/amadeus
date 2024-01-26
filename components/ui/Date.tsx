import React from 'react';

export default function Input(
  { label, value, setValue } = {
    label: 'Search',
    value: '',
    setValue: (e: any) => {},
  }
) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={label}>{label}</label>
      <input
        className=''
        type='date'
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
