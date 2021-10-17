import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export const TransactionHistory = ({ title, items }) => {
  return (
    <section className={s.transaction}>
      <div className={s.transactionWrapper}>
        {title && <h2 className={s.title}>{title}</h2>}
        <table className={s.transactionHistory}>
          <thead className={s.theadTransaction}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody className={s.tbodyTransaction}>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

TransactionHistory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
