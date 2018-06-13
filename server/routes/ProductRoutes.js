const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/ProductController");

router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);


module.exports = router;