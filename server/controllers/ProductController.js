let products = require("../products");

module.exports.list = function list(request, response) {
    return response.json(products);
  };
  module.exports.show = function show(request, response) {
    return response.json(products.find(user => user._id == request.params.id));
  };
  module.exports.create = function create(request, response) {
    const newProduct = request.body;
    products.push(newProduct);
    return response.json(newProduct);
  };
  module.exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
  };
  module.exports.remove = function remove(request, response) {
    return response.json({});
  };