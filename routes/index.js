const express = require('express');
const router = express.Router()

const RoomsType = require("../room-models/rooms-type");
const Room =  require("../room-models/rooms.model");
const RoomsTypeModel = require('../room-models/rooms-type');

c

router.post('/api/v1/rooms-types', async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    const RoomsTypeModel = new RoomsTypeModel({ name });
    try {
      await RoomsTypeModel.save();
      res.status(201).json(RoomsTypeModel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  router.post('/api/v1/rooms', async (req, res) => {
    const { name, roomType, price } = req.body;
    if (!name || !RoomsTypeModel || !price) {
      return res.status(400).json({ message: 'Name, roomType, and price are required' });
    }
    const room = new Room({ name, RoomsTypeModel, price });
    try {
      await room.save();
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get('/api/v1/rooms', async (req, res) => {
    const { search, roomType, minPrice, maxPrice } = req.query;
    const query = {};
    if (search) query.name = { $regex: search, $options: 'i' };
    if (roomType) query.roomType = roomType;
    if (minPrice) query.price = { $gte: minPrice };
    if (maxPrice) query.price = { $: maxPrice };
    try {
      const rooms = await Room.find(query);
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/api/v1/rooms/:id', async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
      res.json(room);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/api/v1/rooms/:id', async(req, res) => {
    try {
        const room = await Room.findById(_id);
        if(!room) {
            return res.status(404).json({message: "Room is Invalid"})
        } res.json(room);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
    });

  module.exports = router
  

  


