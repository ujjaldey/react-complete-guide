import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	props.items.map(expense => console.log(expense));
	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// we can assign JSX to variables
	let expensesContent = <p>No expenses found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date} />
		));
	}

	// note () inside map(=>()) not map(=>{})
	// always add the key= field so that the React know which components to update in case of change in the array
	// instead of id, we can use the index as the key (so it will become like: props.items.map((expense,index))
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				{/* instead of using the long ternary expression, we can use below 2 standalone expressions */}
				{/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
				{filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date} />
				))} */}

				{/* even better below. declare and use variable: expensesContent */}
				{/* {filteredExpenses.length === 0 ?
					(<p>No expenses found</p>) :
					(filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date} />
					)))} */}
				{expensesContent}
			</Card>
		</div>
	);
}

export default Expenses;