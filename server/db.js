const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Account = sequelize.define("account", {
  id: { type: Sequelize.UUIDV4, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
});

const Task = sequelize.define("task", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  done: { type: Sequelize.STRING }
});

export default { Account, Task };