'use client';
import React, { useEffect } from 'react';
import Input from './ui/Input';
import Date from './ui/Date';
import Checkbox from './ui/Checkbox';
import Button from './ui/Button';

export default function SearchBox({
  setShowAllFlights,
  showAllFlights,
  classname,
  setFrom,
  from,
  setTo,
  to,
  setDate,
  date,
  setOneWay,
  oneWay,
  setReturnDate,
  returnDate,
}: any) {
  return (
    <div className={`${classname} w-max px-6 py-12 shadow-xl bg-white `}>
      <Checkbox label='One way' setValue={setOneWay} />
      <div className='flex items-end justify-center  w-max gap-2 '>
        <Input
          label='From'
          options={['istanbul', 'ankara', 'adana']}
          value={from}
          onChange={(e: any) => {
            setFrom(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            const temp = from;
            setFrom(to);
            setTo(temp);
          }}>
          Swap
        </Button>
        <Input
          label='To'
          options={['istanbul', 'ankara', 'adana']}
          value={to}
          onChange={(e: any) => {
            setTo(e.target.value);
          }}
        />
        <Date label='Departure' setValue={setDate} value={date} />
        {!oneWay && (
          <div>
            <Date label='Return' setValue={setReturnDate} value={returnDate} />
          </div>
        )}
        <Button
          onClick={() => {
            setShowAllFlights((prev: boolean) => !prev);
          }}>
          {showAllFlights ? 'Hide all flights' : 'Show all flights'}
        </Button>
      </div>
    </div>
  );
}
