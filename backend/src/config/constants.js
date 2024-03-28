require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'victoriasecret',
  DB_URI: process.env.DB_URI || 'mongodb://127.0.0.1:27017/api-db',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
  TOKEN_NAME: process.env.TOKEN_NAME || 'x-authorization',
  INFLUXDB_URL: process.env.INFLUXDB_URL || 'http://localhost:8086',
  INFLUXDB_TOKEN: process.env.INFLUXDB_TOKEN || '',
  INFLUXDB_ORG: process.env.INFLUXDB_ORG || 'my-org',
  INFLUXDB_BUCKET: process.env.INFLUXDB_BUCKET || 'my-bucket',
};
