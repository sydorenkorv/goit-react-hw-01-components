import PropTypes from 'prop-types';
import friends from 'assets/transactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {

    
    return (
<table className={styles.transactionHistory}>
  <thead className={styles.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>

                {items.map(item => (
    <tr key={item.id}>
                        <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.type}</td>
                </tr>
        ))}
  </tbody>
</table>
        )
}


export default TransactionHistory;