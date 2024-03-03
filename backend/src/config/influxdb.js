const { InfluxDB } = require('@influxdata/influxdb-client');
const { INFLUXDB_URL, INFLUXDB_TOKEN, INFLUXDB_ORG, INFLUXDB_BUCKET } = require('./constants');

const influxDB = new InfluxDB({ url: INFLUXDB_URL, token: INFLUXDB_TOKEN });
const writeAPI = influxDB.getWriteApi(INFLUXDB_ORG, INFLUXDB_BUCKET);

module.exports = { influxDB, writeAPI };