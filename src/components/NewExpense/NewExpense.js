import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveEnteredExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		console.log(expenseData);

		props.onAddExpense(expenseData);

		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-expense'>
			{/* show button if isEditing is false, show form if true */}
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveEnteredExpenseData} onCancel={stopEditingHandler} />}
		</div>
	);
};

export default NewExpense;