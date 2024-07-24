import { Avatar, Typography, Divider } from "@mui/material";
import {
  GroupContainer,
  GroupDetails,
  GroupAvatar,
  Balances,
  Debt,
  PersonBalance,
} from "../styles/Group.styles";

export default function Group({ groupData, setPage, setParams }) {
  return (
    <GroupContainer>
      <GroupHeader groupData={groupData} />
      <DebtsSummary debts={groupData.debts} currency={groupData.currency} />
      <OverallBalance groupData={groupData} />
    </GroupContainer>
  );
}

function GroupHeader({ groupData }) {
  return (
    <GroupDetails>
      <GroupAvatar width="30px" height="30px"></GroupAvatar>
      <div className="group-details">
        <Typography>{groupData.groupName}</Typography>
        <Typography className="date">{groupData.createdAt}</Typography>
      </div>
      <Typography className="money">
        {groupData.currency}
        {groupData.totalAmount}
      </Typography>
    </GroupDetails>
  );
}

function DebtsSummary({ debts, currency }) {
  return (
    <Balances>
      {debts.map((debt) => {
        return (
          <Debt>
            <GroupAvatar width="25px" height="25px"></GroupAvatar>
            <Typography className="debt-text">
              {debtText(debt.personName, debt.amount, currency)}
            </Typography>
          </Debt>
        );
      })}
    </Balances>
  );
}

function OverallBalance({groupData}) {
  return (
    <PersonBalance balanceAmount={groupData.totalBalance}>
      <Typography className="balance-text">
        {totalBalanceText(groupData.totalBalance)}
      </Typography>
      <Typography className="balance-amount">
        {groupData.currency}
        {Math.abs(groupData.totalBalance)}
      </Typography>
    </PersonBalance>
  );
}

function totalBalanceText(totalBalance) {
  let totalBalanceText;

  if (totalBalance == 0) {
    totalBalanceText = "Settled up";
  } else if (totalBalance > 0) {
    totalBalanceText = "You are owed";
  } else if (totalBalance < 0) {
    totalBalanceText = "You owe";
  }

  return totalBalanceText;
}

function debtText(debtee, debtAmount, currency) {
  let debtText;

  if (debtAmount > 0) {
    debtText = (
      <>
        {debtee} owes you{" "}
        <b>
          {currency}
          {Math.abs(debtAmount)}
        </b>
      </>
    );
  }
  if (debtAmount < 0) {
    debtText = (
      <>
        you owe {debtee}{" "}
        <b>
          {currency}
          {Math.abs(debtAmount)}
        </b>
      </>
    );
  }

  return debtText;
}
