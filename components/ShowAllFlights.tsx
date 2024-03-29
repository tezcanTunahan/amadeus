'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';

export default function ShowAllFlights({}: {}) {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      // .get(' http://localhost:3000/api/flights')
      .get('https://amadeus-seven.vercel.app/api/flights')
      .then((response) => {
        setFlights(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=' bg-blue-300 items-center flex flex-col mt-20'>
      <h1 className='text-4xl my-5 text-white font-semibold'>All Flights</h1>
      <div className='flex flex-row flex-wrap items-center justify-center'>
        {loading && <p>Loading...</p>}
        {flights.map((flight) => {
          return (
            <div
              key={
                flight.price +
                flight.from +
                flight.to +
                flight.date +
                flight.airline +
                flight.flightNumber +
                flight.departureTime
              }
              className='shadow-2xl 
                bg-white
                hover:bg-gray-100
                border border-gray-200
                rounded-lg
                p-4
                cursor-pointer
                m-2'>
              <p>
                From {flight.from} to {flight.to} at {flight.date}
              </p>
              <p>price : {flight.price}</p>
              <p>airline : {flight.airline}</p>
              <p>flight number : {flight.flightNumber}</p>
              <p>departure time : {flight.departureTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
