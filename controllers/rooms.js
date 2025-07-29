const Room = require('../models/Rooms');

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true });
    res.json(rooms);
  } 
  catch (err) {
    res.json({ error: err.message });
  }
};

const addRoom = async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateRoom = async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(room);
  } catch (err) {
    res.json({ error: err.message });
  }
};

const deleteRoom = async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.json({ error: err.message });
  }
}
module.exports = { getRooms, addRoom, updateRoom, deleteRoom };
