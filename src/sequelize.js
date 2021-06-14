const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');

// Connect to database
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
console.log(process.env.USER);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});
(async () => {
  try {
    const res = await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
})();

const User = UserModel(sequelize);

module.exports = {
  User,
};
