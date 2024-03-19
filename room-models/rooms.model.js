const {
    Schema,
    model
 } = require("mongoose");

 const Rooms = new Schema({
  name: {
    type: String,
    required: true,
  },
  roomsType: {
    type: mongoose.Schema.Types.Object_Id,
    ref: 'RoomsType',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = model('Room', Rooms);
module.exports = Room;

