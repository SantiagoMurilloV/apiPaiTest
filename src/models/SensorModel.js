const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  actualDate: String,
  mH: Number, 
  Pho_7in1: Number,
  Pot_7in1: Number,
  Nit_7in1: Number,
  Moi_7in1: Number, 
  Tem_7in1: Number,
  Ph_7in1: Number,
  Con_7in1:Number
});

module.exports = mongoose.model('Sensor', sensorSchema);




