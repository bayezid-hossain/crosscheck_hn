const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/errorhandler');
const Driver = require('../models/validDriverModel.js');
const Bus = require('../models/validBusModel');
let channel;

//check valid driver
const checkValidDriver = async (name, licenseNumber) => {
  let driver = await Driver.findOne({
    driverName: name,
    licenseNo: licenseNumber,
  });

  if (driver) {
    return true;
  } else return false;
};

//checking if driver exists in valid drivers collection
exports.crosscheckDriver = catchAsyncErrors(async (req, res, next) => {
  const { driverName, licenseNumber } = req.body;
  const result = await checkValidDriver(driverName, licenseNumber);
  if (result == true) {
    res.status(200).json({
      result: true,
    });
  } else
    res.status(200).json({
      message: 'Driver not valid',
      result: false,
    });
});
//check valid bus
const checkValidBus = async (busNo, engNo) => {
  return bus;
};

//checking if bus exists in valid bus collection
exports.crossCheckBus = catchAsyncErrors(async (req, res, next) => {
  const { busNo, engNo } = req.body;
  let bus = await Bus.findOne({
    busNo: busNo,
    engNo: engNo,
  });
  res.status(200).json({
    bus,
  });
});
// async function connect() {
//   const amqpServer = 'amqp://admin:gobdrabbitadmin@localhost';
//   const connection = await amqp.connect(amqpServer);
//   channel = await connection.createChannel();
//   await channel.assertQueue('CHECKDRIVER');
//   await channel.assertQueue('DRIVERVALIDITYRESULT');
//   await channel.assertQueue('CHECKBUS');
//   await channel.assertQueue('BUSVALIDITYRESULT');
// }

// connect().then(() => {
//   channel.consume('CHECKDRIVER', (data) => {
//     console.log('Consuming CHECKDRIVER service');
//     const { name, licenseNumber } = JSON.parse(data.content);
//     try {
//       checkValidDriver(name, licenseNumber)
//         .then((value) => {
//           channel.ack(data);
//           channel.sendToQueue(
//             'DRIVERVALIDITYRESULT',
//             Buffer.from(JSON.stringify({ result: value }))
//           );
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });
