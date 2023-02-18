import React, { useState } from 'react';
import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
