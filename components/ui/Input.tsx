import React from 'react';

export default function Input(
  { label, value, options, onChange } = {
    label: 'Search',
    value: '',
    onChange: (e: any) => {},
    options: [''],
  }
) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={label}>{label}</label>
      <select
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
        id={label}
        value={value}
        onChange={onChange}>
        <option>Select</option>
        {options.map((option: string) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}
