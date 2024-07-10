import {
  ListItemText,
} from "@mui/material";

export default function Debts({ totalBalance, currency, debts }) {
  const debtsTextArray = debts.map((debt) => {
    console.log(debt);
    let debtText = "";
    let debtAmount = debt.amount < 0 ? -debt.amount : debt.amount;
    if (debt.amount > 0) debtText = `${debt.personName}. owes you $${debtAmount}`;
    if (debt.amount < 0) debtText = `You owe ${debt.personName}. $${debtAmount}`;
    return <div>{debtText}</div>;
  });

  console.log(debtsTextArray);

  return (
    <ListItemText
      primary={
        <TotalBalanceText currency={currency} totalBalance={totalBalance} />
      }
      primaryTypographyProps={{ variant: "body2", color: "black" }}
      secondary={debtsTextArray}
    />
  );
}

function TotalBalanceText({ totalBalance, currency }) {
  let totalBalancetext = "settled up";
  const balanceAmount = totalBalance < 0 ? -totalBalance : totalBalance;
  if (totalBalance > 0)
    totalBalancetext = `you are owed ${currency}${balanceAmount}`;
  if (totalBalance < 0)
    totalBalancetext = `you owe ${currency}${balanceAmount}`;
  return <>{totalBalancetext}</>;
}
