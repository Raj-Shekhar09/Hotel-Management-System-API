const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) {
      return res.json({ msg: 'Account already exists' });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hash });
    res.status(201).json({ msg: 'Account created', userId: user._id });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select('+password');
    if (!user) {
      return res.json({ msg: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.json({ msg: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'your_jwt_secret');
    res.json({ token,
         userId: user._id,
         name: user.name, 
         isAdmin: user.isAdmin })
  } 
  catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = { register, login }
