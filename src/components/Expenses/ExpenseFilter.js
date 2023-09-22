import React from 'react';

import './ExpenseFilter.css';
import { filteredByYearOptions } from '../../data/yearsModel'

const years = filteredByYearOptions

const ExpensesFilter = (props) => {

  function onChangeSelect(event) {
    props.onChangeYearFilterSelect(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select
          onChange={onChangeSelect}
        >
          {
            years.map(year =>
              <option value={year}>{year}</option>
            )
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;