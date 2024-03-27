const { Point, InfluxDB, FieldType } = require('@influxdata/influxdb-client');
const { writeAPI } = require('../config/influxdb');

exports.createTransaction = async ({ type, currency, amount }) => {
  const transaction = new Point('transaction')
  .tag('type', type)
  .tag('currency', currency)
  .floatField('amount', amount)
  .timestamp(new Date().getTime());

  console.log(transaction);

  writeAPI.writePoint(transaction);

  writeAPI.close().then(() => {
    console.log('Write finished');
    return transaction;
  }).catch(e => {
      console.error(e);
    });
}
