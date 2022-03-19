import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // props holds all the attributes (key value pair) we pass when calling the component
  // useState always return an array with exactly 2 elements. the variable, and the function to set that variable value
  // the names of these elements do not matter. But the convention is to use the name of the variable and set+name for the function
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* dont add () to the function name. we are not executing it here, just adding a reference */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
