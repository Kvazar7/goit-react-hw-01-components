import PropTypes from "prop-types";
import css from '../Transactionhistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    {items.map(item => (
      <tbody className={css.item} key={item.id}>
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
    </tbody>
       
    ))}    
    </table>
);

TransactionHistory.prototype = {
  items: PropTypes.array
}