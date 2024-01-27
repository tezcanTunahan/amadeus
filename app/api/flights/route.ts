import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/utils/database';
import Flight from '@/models/flight';

connect();
export async function GET(req: NextRequest) {
  try {
    const flights = await Flight.find({});
    console.log(flights);
    return NextResponse.json({
      message: 'Flight saved',
      success: true,
      data: flights,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST() {
  try {
    const flights = [];

    for (let i = 0; i < 50; i++) {
      // İki şehir arasında eşit olasılıkla seçim yapmak için
      const fromCity = i % 2 === 0 ? 'istanbul' : 'ankara';
      const toCity = i % 2 === 0 ? 'ankara' : 'istanbul';

      // Tarihler 26-01-2024 ile 30-01-2024 arasında otomatik olarak artacak
      const currentDate = new Date('2024-01-26');
      currentDate.setDate(currentDate.getDate() + i);
      const formattedDate = currentDate.toISOString().split('T')[0];

      // Saatler rastgele seçilecek
      const randomHour = Math.floor(Math.random() * 24);
      const randomMinute = Math.floor(Math.random() * 60);
      const formattedTime = `${String(randomHour).padStart(2, '0')}:${String(
        randomMinute
      ).padStart(2, '0')}`;

      // Price değeri 150 TL'den büyük, 2000 TL'den küçük random bir değer alacak
      const randomPrice = Math.floor(Math.random() * (2000 - 150 + 1)) + 150;

      const newFlight = new Flight({
        from: fromCity,
        to: toCity,
        date: formattedDate,
        price: randomPrice,
        airline: 'THY',
        flightNumber: `TK${i + 123}`,
        departureTime: formattedTime,
      });

      const savedFlight = await newFlight.save();
      flights.push(savedFlight);
    }

    console.log(flights);

    return NextResponse.json({
      message: 'Flights saved',
      success: true,
      data: flights,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
