const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");

// routes
app.use("/", apiRouter);

// server
app.listen(port, () => {
  console.log(`serwer słucha na porcie: ${port}`);
});
