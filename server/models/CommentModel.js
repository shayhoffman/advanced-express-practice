const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    body: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Comment", schema);

//should the "Comment" be upper or lower case at the bottom?