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

	// note () inside map(=>()) not map(=>{})
	// always add the key= field so that the React know which components to update in case of change in the array
	// instead of id, we can use the index as the key (so it will become like: props.items.map((expense,index))
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;