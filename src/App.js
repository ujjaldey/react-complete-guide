// import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const DUMMY_EXPENSES = [{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14)
}, {
  id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12)
}, {
  id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28)
}, {
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12)
}];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // this is really not correct, as we are updating the state based on the previous snapshot of the state
    // so insted, we should use the special syntax below
    // setExpenses([expense, ...expenses]); // use spread operator to add the new expense in the expenses array
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

    setTimeout(() => {
      console.log(expenses);
    },2000);
    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // alternate way of returning the components in compare to JSX. This require to import React from 'react';
  // otherwise we dont need to explicitly import React as it is done automatically under the hood
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }));
}

export default App;