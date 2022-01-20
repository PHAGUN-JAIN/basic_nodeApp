const router = require("express").Router();
const awesomeRouter = require("./awesomeRoutes");

router.use("/awesome", awesomeRouter);

router.route("/").get((req, res) => {
  res.send("Hello World!");
});

module.exports = router;
