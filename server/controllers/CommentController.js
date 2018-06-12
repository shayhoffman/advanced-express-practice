const comments = require("../comments");

module.exports.list = function list(request, response) {
  return response.json(comments);
};
module.exports.show = function show(request, response) {
  return response.json(comments.find(user => user._id == request.params.id));
};
module.exports.create = function create(request, response) {
  const newComment = request.body;
  comments.push(newComment);
  return response.json(newComment);
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};