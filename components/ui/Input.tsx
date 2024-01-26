import React from 'react';

export default function Input(
  { placeholder, label, value, setValue } = {
    placeholder: 'Search',
    label: 'Search',
    value: '',
    setValue: (e: any) => {},
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
        onChange={(e) => setValue(e.target.value)}>
        <option value=''>Select</option>
        <option value='istanbul'>Istanbul</option>
        <option value='ankara'>Ankara</option>
        <option value='adana'>Adana</option>
      </select>
    </div>
  );
}
