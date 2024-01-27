import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import Input from './ui/Input';

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
  const [listBy, setListBy] = useState<string>('');
  const [filteredFlights, setFilteredFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/api/flights')
      // .get('https://amadeus-seven.vercel.app/api/flights')
      .then((response) => {
        setFlights(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (listBy === 'price') {
      const sortedFlights = [...filteredFlights].sort(
        (a, b) => a.price - b.price
      );
      setFilteredFlights(sortedFlights);
    } else if (listBy === 'time') {
      const sortedFlights = [...filteredFlights].sort((a, b) => {
        return (
          parseInt(a.departureTime.replace(':', '')) -
          parseInt(b.departureTime.replace(':', ''))
        );
      });
      setFilteredFlights(sortedFlights);
    }
  }, [listBy, flights]);

  useEffect(() => {
    const filteredFlights = flights.filter((flight) => {
      return (
        flight.from.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase()) &&
        flight.date.includes(date)
      );
    });
    setFilteredFlights(filteredFlights);
  }, [from, to, date]);

  return (
    <div>
      <h1>Flights</h1>
      <Input
        onChange={(e) => {
          setListBy(e.target.value);
        }}
        label='list by'
        value={listBy}
        options={['price', 'time']}
      />

      <div>
        {from + ' ' + to + ' ' + date}

        {loading && <p>loading...</p>}
        {filteredFlights.map((flight) => {
          return (
            <div
              key={flight.price + flight.date}
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
