import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card';
import './Expenses.css';
import { filteredByYearOptions } from '../../data/yearsModel'

import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  const [year, setYear] = useState(2021)
  function filterByYear(year) {
    setYear(year)
  }
  const filteredExpensesByYears = props.items.filter(item => {
    return item.date.getFullYear() === Number(year)
  }
  )
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYearFilterSelect={filterByYear}>

      </ExpensesFilter>
      <ExpensesChart expenses={filteredExpensesByYears}/>
      <p>
        Data for years {
          filteredByYearOptions.filter(yearOption => yearOption !== year)
            .map((hiddenYear, index, array) => {
              if (index + 1 === array.length) {
                return <span> & {hiddenYear} </span>
              }
              else if (index === 0) {
                return <span> {hiddenYear} </span>
              }
              return <span> , {hiddenYear} </span>
            })
        } are hidden
      </p>
      {
        !filteredExpensesByYears.length ?
          <p className='no-data'>
            No data found.
          </p> :
          filteredExpensesByYears
            .map(
              (expense, _, array) => {
                return <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />

              }
            )
      }
    </Card>
  );
}

export default Expenses;
