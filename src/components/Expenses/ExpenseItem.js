import React , {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // let title = props.title
  // const clickHandler = () =>{
  //   title = 'Updated'
  //   console.log(title)
  // }

  const [title, setTitle] = useState(props.title)
  console.log('Hi im a ExpenseItem')

  const clickHandler = () =>{
    console.log(title)
    setTitle('Updated')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>
          Change Title
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
