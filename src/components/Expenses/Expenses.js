import React, { useState } from 'react';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
