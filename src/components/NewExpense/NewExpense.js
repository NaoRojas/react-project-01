import React from "react"
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  function saveData(expense){
    props.addExpense(expense)
    console.log(expense)
  }
  return (
    <div className="new-expense">
      <ExpenseForm
      onAddExpense={saveData}
      />
    </div>
  )
}

export default NewExpense