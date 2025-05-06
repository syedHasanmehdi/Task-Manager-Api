import {Sequelize} from 'sequelize';
import {config} from '../config/config.js';

export const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      host: config.db.host,
      dialect: config.db.dialect,
      port: config.db.dbPort,
    },
);

