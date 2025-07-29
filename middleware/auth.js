`const jwt = require('jsonwebtoken');
const JWT_SECRET = '8480954084';
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.json({ message: 'Token required' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.json({ message: 'Token required' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.json({ message: 'Invalid token' });
  }
};
