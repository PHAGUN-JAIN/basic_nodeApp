const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey router");
});
// router.route("/").get((req, res) => {
//   res.send("Hello World blah!!");
//   //   res.redirect("https://youtu.be/dQw4w9WgXcQ");
// });

module.exports = router;
