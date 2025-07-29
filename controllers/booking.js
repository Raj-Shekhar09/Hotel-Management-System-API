const Booking = require('../models/Bookings')
const bookRooms = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user.id,
      ...req.body
    });
    res.status(201).json(booking)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

const myBooking=async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('room')
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { bookRooms, myBooking }
