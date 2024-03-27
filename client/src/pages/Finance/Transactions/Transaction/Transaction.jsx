import TransactionStyles from './Transaction.module.css';

function Transaction() {
  return (
    <div className={TransactionStyles.transaction}>
      <div className={TransactionStyles.category}>
        <p>Transport</p>
      </div>
      <div className={TransactionStyles.info}>
        <p>Gas</p>
      </div>
      <div className={TransactionStyles.cost}>
        <p>100лв</p>
      </div>
    </div>
  );
}

export default Transaction;
