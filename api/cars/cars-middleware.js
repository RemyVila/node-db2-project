const Car = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);
    if(!car){
      res.status(404).json({
        message: "This car could not be found"
      })
    } else{
      req.car = car
      next()
    }
  } catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const make = req.body.make
  const model = req.body.model
  const vin = req.body.vin
  const mileage = req.body.mileage
}

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = req.body.vin
    let isValidVin = vinValidator.validate(data);
    return isValidVin
  }
  catch(err) {
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {

  }
  catch(err) {
    next(err)
  }
}