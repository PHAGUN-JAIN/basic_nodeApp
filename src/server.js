const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
