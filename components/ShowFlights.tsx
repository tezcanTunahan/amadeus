'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function ShowFlights({
  from,
  to,
  date,
}: {
  from: string;
  to: string;
  date: string;
}) {
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
  }, [from, to, date]);

  return (
    <div>
      <h1>Flights</h1>
      <div>
        {from + ' ' + to + ' ' + date}

        {flights.map((flight) => {
          if (flight.from == from && flight.to == to && flight.date == date) {
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
          }
          return null; // If the condition is not met, return null or an empty fragment
        })}
      </div>
    </div>
  );
}
