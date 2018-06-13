const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);


module.exports = router;