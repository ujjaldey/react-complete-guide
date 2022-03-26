import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// instead of having 3 states as above, we can do it in a single state
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	// const titleChangeHandler = (event) => {
	// 	// setUserInput({
	// 	// 	...userInput,
	// 	// 	enteredTitle: event.target.value
	// 	// });
	// 	// safer way
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredTitle: event.target.value };
	// 	});
	// };
	// const amountChangeHandler = (event) => {
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredAmount: event.target.value };
	// 	});
	// }
	// const dateChangeHandler = (event) => {
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredDate: event.target.value };
	// 	});
	// }

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		// console.log(expenseData);

		// we call the function in prop that we have used while using this component.
		// calling this prop function, will actually call enteredExpenseData() defined in NexExpense component.
		props.onSaveExpenseData(expenseData);

		// clear up the fields
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;