const CommentModel = require("../models/CommentModel");

module.exports.list = function list(request, response) {
  CommentModel.find({}).exec()
  .then(comment => {
      response.json(comment);
  });
};
//may change above commentS to comment 
module.exports.show = function show(request, response) {
  CommentModel.findById(request.params.id).exec()
  .then(comment => {
      response.json(comment);
  });
};

module.exports.create = function create(request, response) {
  const newComment = new CommentModel(request.body);
  newComment.save()
  .then(savedComment => {
      response.json(savedComment);
  });
};