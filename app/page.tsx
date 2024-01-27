'use client';
import React, { useState } from 'react';
import DateTime from '@/components/DateTime';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import ShowFlights from '@/components/ShowFlights';
import ShowAllFlights from '@/components/ShowAllFlights';

export default function Home() {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [date, setDate] = React.useState('');
  const [returnDate, setReturnDate] = React.useState('');
  const [oneWay, setOneWay] = React.useState(false);
  const [showAllFlights, setShowAllFlights] = React.useState(false);
  return (
    <main className='flex items-center flex-col justify-center  mt'>
      <Navbar />

      <SearchBox
        classname=' relative bottom-10'
        setFrom={setFrom}
        from={from}
        setTo={setTo}
        to={to}
        setDate={setDate}
        date={date}
        setOneWay={setOneWay}
        oneWay={oneWay}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        setShowAllFlights={setShowAllFlights}
        showAllFlights={showAllFlights}
      />
      <h2 className='font-semibold text-2xl'>
        Flights are only available for the dates between 26-01-2024 and
        30-03-2024.
      </h2>
      <p>
        your flight from {from} to {to} at {date}
      </p>
      <div className='flex '>
        <ShowFlights from={from} to={to} date={date} />
        {!oneWay && <ShowFlights from={to} to={from} date={returnDate} />}
      </div>
      <div className=''>{showAllFlights && <ShowAllFlights />}</div>
    </main>
  );
}
