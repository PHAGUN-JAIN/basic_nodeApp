const router = require("express").Router();

router.route("/").get((req, res) => {
  // res.send("Hello World blah!!");
  res.redirect("https://youtu.be/dQw4w9WgXcQ");
});

module.exports = router;
