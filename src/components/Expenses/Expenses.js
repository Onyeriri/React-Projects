import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expense }) {
  return (
    <div className="expenses">
      <ExpenseItem expense={expense} />
    </div>
  );
}

export default Expenses;
