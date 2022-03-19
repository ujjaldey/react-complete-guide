import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
	const saveEnteredExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		console.log(expenseData);

		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveEnteredExpenseData} />
		</div>
	);
};

export default NewExpense;