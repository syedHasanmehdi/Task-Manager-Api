import {Sequelize} from 'sequelize';
import {config} from '../config/config.js';
import UserModel from './user.js';
import TaskModel from './task.js';
import dotenv from 'dotenv';
import logger from '../config/logger.js';

dotenv.config();

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      port: config.dbPort,
    },
);
// eslint-disable-next-line new-cap
const User = UserModel(sequelize, Sequelize.DataTypes);
// eslint-disable-next-line new-cap
const Task = TaskModel(sequelize, Sequelize.DataTypes);

User.hasMany(Task, {foreignKey: 'userId'});
Task.belongsTo(User, {foreignKey: 'userId'});

const db = {
  sequelize,
  User,
  Task,
};

(async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connected to the database.');

    await sequelize.sync();
    logger.info('Database tables created or updated.');
  } catch (error) {
    logger.error('Failed to connect or sync with database:', error.message);
  }
})();

export default db;
