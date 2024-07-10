import { ListItem, ListItemText } from "@mui/material";

export default function Expense({ expense, currency, shares }) {
  // console.log(expense)
  return (
    <ListItem>
      <ListItemText
      secondary={`${expense.expenseDate}`}
      />
      <ListItemText
        primary={expense.expenseName}
        primaryTypographyProps={{ variant: "body2", color: "black" }}
        secondary={`${expense.paidBy}. paid ${currency} ${expense.amountPaid}`}
      />
    </ListItem>
  );
}
