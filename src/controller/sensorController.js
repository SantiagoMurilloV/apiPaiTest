const Sensor = require('../models/SensorModel');

exports.createSensorData = async (req, res) => {
  try {
      const { mH, Pho_7in1, Pot_7in1, Nit_7in1, Moi_7in1, Tem_7in1, Ph_7in1, Con_7in1 } = req.body;
      const date = new Date().toLocaleString("es-CO", {timeZone: "America/Bogota"});
      const sensorData = new Sensor({
          mH, Pho_7in1, Pot_7in1, Nit_7in1, Moi_7in1, Tem_7in1, Ph_7in1, Con_7in1,
          actualDate: date
      });

      await sensorData.save();

      res.status(201).json({ message: 'Sensor data created successfully' });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};



exports.getSensorData = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.status(200).json(sensors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
