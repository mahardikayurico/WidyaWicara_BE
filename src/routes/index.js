const express = require("express");
const router = express();
const productRoute = require("./product.routes");
const authRoute = require("../routes/auth.routes");

router.get("/", (req, res) => {
  return res.send("backend for Widya Wicara ");
});
router.use("/products", productRoute);
router.use("/auth", authRoute);

module.exports = router; //export, biar bisa diakses oleh file lain melalui require
