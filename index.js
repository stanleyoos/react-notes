const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");

//db
require("./db/mongoose");

// fix cors
app.use(cors());

// parsery
// Content-type: application/json
app.use(bodyParser.json());

// routes
app.use("/api/", apiRouter);

// server
app.listen(port, () => {
  console.log(`serwer słucha na porcie: ${port}`);
});
