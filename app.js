const express = require("express");
const nofevicon = require("express-no-favicons");
const bodyParser = require("body-parser");

const logger = require("./loggers/index-logger");
const { port } = require("./config/config");
const sequelize = require("./util/database");

const app = express();

app.use(nofevicon());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/demo", (req, res) => {
  res.json({ str: "Server is Ready" });
  logger.info("path: /demo ");
});

sequelize
  .sync({ force: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`serve at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
