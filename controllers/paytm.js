const Payment = require('../models/Payments');
const sPayment = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;
    const payment = await Payment.create({
      user: req.user.id,
      booking: bookingId,amount,
      status: 'success'
    });
    res.json({ message: 'Payment successful', payment });
  } catch (err) {
    res.json({ error: err.message });
  }
}
module.exports = { sPayment };