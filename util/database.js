const Sequelize = require("sequelize");

const sequelize = new Sequelize("demo", "postgres", "password", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

module.exports = sequelize;
