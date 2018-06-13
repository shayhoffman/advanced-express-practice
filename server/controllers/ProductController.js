const ProductModel = require("../models/ProductModel");

module.exports.list = function list(request, response) {
    ProductModel.find({}).exec()
    .then(products => {
        response.json(products);
    });
  };
  
  module.exports.show = function show(request, response) {
    ProductModel.findById(request.params.id).exec()
    .then(product => {
        response.json(product);
    });
  };
  
  module.exports.create = function create(request, response) {
    const newProduct = new ProductModel(request.body);
    newProduct.save()
    .then(savedProduct => {
        response.json(savedProduct);
    });
  };