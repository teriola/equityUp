const { Point } = require('@influxdata/influxdb-client');
const { writeAPI } = require('../config/influxdb');

exports.createTransaction = async ({ type, currency, amount }) => {
  // Create a new transaction
  const transaction = new Point('transactions')
  .tag('type', type)
  .tag('currency', currency)
  .floatField('amount', amount)
  .timestamp(new Date());

  // Write the transaction to the database and return it
  writeAPI.writePoint(transaction);
  return transaction;
}

exports.getTransactions = async () => {
  // Query all transactions from the database
  const query = 'from(bucket: "transactions") |> range(start: -1h)';
  writeAPI.queryRows(query, {
    next: (row, tableData) => {
      console.log(row);
      console.log('-----------------------------');
      console.log(tableData);
    },
    error: (err) => {
      console.error(err);
    },
    complete: () => {
      console.log('Success');
    },
  });
}
