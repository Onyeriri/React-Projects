import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  const { date, amount, title } = expense;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
