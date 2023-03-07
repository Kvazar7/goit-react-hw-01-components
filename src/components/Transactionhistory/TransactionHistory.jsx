import transactions from '../User/transactions'

const TransactionHistory = ({ items }) => (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    {items.map(item => (
    <tbody className="item" key={item.id}>
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
    </tbody>
       
    ))}    
    </table>
);

export const TransactionHistoryApp = () => (
    <TransactionHistory items={transactions} />
);