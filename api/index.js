const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./startup/routes")(app);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
