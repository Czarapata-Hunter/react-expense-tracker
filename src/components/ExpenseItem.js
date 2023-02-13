import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4 className="expense-item__price">{props.amount}</h4>
      </div>
    </Card>
  );
}
