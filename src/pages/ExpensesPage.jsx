import expenses_dummy from "../dummy-rest-responses/expenses-dummy";
import Debts from "../components/Debts";
import { List,ListItemText } from "@mui/material";
import Expense from "../components/Expense";

export default function ExpensesPage ({setPage, params, setParams}) {
    let expenseListItems = [];
    
    expenses_dummy.expenses.map((expense) => expenseListItems.push(<Expense expense={expense} currency={expenses_dummy.currency} shares={expense.shares}/>));
    return (<>
    <h1>{expenses_dummy.groupName}</h1>
    <Debts currency={expenses_dummy.currency} totalBalance={expenses_dummy.totalBalance} debts={expenses_dummy.debts}/>
    <List>
        {expenseListItems}
    </List>
    </>);
}