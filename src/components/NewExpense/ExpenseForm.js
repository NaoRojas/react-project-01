import React, { useState } from "react"
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState("2019-01-01")
  // const [amount, setAmount] = useState(0)\
  const [showForm, setShowForm] = useState(false)
  const [expense, setEspense] = useState({
    title: '',
    date: '2019-01-01',
    amount: 30,

  })

  function toggleShowForm() {
    setShowForm((prevState) => !prevState)

    if(showForm){
      setShowForm(false)
    }else{
      setShowForm(true)
    }
  }

  function titleChangeHandler(event) {
    // setEspense({...expense, title:event.target.value})

    //Better approach
    setEspense((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  }

  function dateChangeHandler(event) {
    // setEspense({...expense, date:event.target.value})

    //Better approach
    setEspense((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  }
  function amountChangeHandler(event) {
    // setEspense({...expense, amount:event.target.value})

    //Better approach
    setEspense((prevState) => {
      return { ...prevState, amount: event.target.value }
    })
  }

  function onAdd(event) {
    if (event) {
      props.onAddExpense({ ...expense, date: new Date(expense.date) })
      // event.preventDefault()
      setEspense({
        title: '',
        date: '',
        amount: ''
      })

    }
    toggleShowForm()
  }

  return (
    <div>
      {showForm ?
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>
                Title
              </label>
              <input type="text"
                value={expense.title}
                onChange={titleChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>
                Amount
              </label>
              <input type="number" min="0" step="10"
                value={expense.amount}
                onChange={amountChangeHandler} />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>
                Date
              </label>
              <input type="date" min="2019-01-01" max="2023-12-31"
                value={expense.date}
                onChange={dateChangeHandler} />
            </div>
          </div>
          <div className="new-expense__actions">
          <button
              className="cancel"
              onClick={toggleShowForm}
            >
             Cancel
            </button>
            <button
              onClick={onAdd}
            >
              Add Expense
            </button>
          </div>
          {/* <div className="json">
        <pre>
          {JSON.stringify(expense, undefined, 2)}
        </pre>
      </div> */}
        </div> :

        <div className="default">
          <div className="new-expense__actions">
            <button
              onClick={toggleShowForm}
            >
              Add Expense
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default ExpenseForm