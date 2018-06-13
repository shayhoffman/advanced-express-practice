const VehicleModel = require ("../models/VehicleModel");

module.exports.list = function list(request, response) {
    VehicleModel.find({}).exec()
    .then(vehicles => {
        response.json(vehicles);
    });
  };
  
  module.exports.show = function show(request, response) {
    VehicleModel.findById(request.params.id).exec()
    .then(vehicle => {
        response.json(vehicle);
    });
  };
  
  module.exports.create = function create(request, response) {
    const newVehicle = new VehicleModel(request.body);
    newVehicle.save()
    .then(savedVehicle => {
        response.json(savedVehicle);
    });
  };