import mongoose, { model, models } from 'mongoose';

const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  date: {
    type: String,
  },
  price: {
    type: Number,
  },
  airline: {
    type: String,
  },
  flightNumber: {
    type: String,
  },
  departureTime: {
    type: String,
  },
});

const Flight = models.Flight || model('Flight', FlightSchema);

export default Flight;
