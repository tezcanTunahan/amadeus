'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function ShowAllFlights({}: {}) {
  const [flights, setFlights] = useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/api/flights')
      .then((response) => {
        console.log(response.data.data);
        setFlights(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <div>
        <div className='flex flex-row flex-wrap bg-blue-200 items-center justify-center'>
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
    </div>
  );
}
