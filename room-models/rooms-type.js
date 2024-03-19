
const {
    Schema,
    model
 } = require("mongoose")

 const RoomsType = new Schema({
    name: {
        type: String,
        required: true,
      },
 });

 const RoomsTypeModel = model("rooms-type", RoomsType);

 module.exports = RoomsTypeModel

 