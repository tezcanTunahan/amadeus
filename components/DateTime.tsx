'use client';
import React, { useEffect, useState } from 'react';

export default function DateTime() {
  const [today, setToday] = useState('');
  const [time, setTime] = useState('');
  // for time and date
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      setToday(date.toLocaleDateString() as string);
    }, 1000);
  }, []);
  return (
    <div className='text-center text-2xl'>
      <p>Today is {today}</p>
      <p>Time is {time}</p>
    </div>
  );
}
