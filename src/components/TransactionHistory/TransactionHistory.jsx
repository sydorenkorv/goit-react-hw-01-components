import PropTypes from 'prop-types';
import friends from 'assets/transactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {

    
    return (
<table className={styles.transactionHistory}>
  <thead className={styles.head}>
    <tr>
      <th className={styles.type}>Type</th>
      <th className={styles.amount}>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={styles.body}>

                {items.map(item => (
    <tr className={styles.bodyItem} key={item.id}>
                        <td>{item.type}</td>
      <td className={styles.amount}>{item.amount}</td>
      <td>{item.currency}</td>
                </tr>
        ))}
  </tbody>
</table>
        )
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;