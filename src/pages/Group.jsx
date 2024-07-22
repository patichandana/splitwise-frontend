import { Avatar, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
// import CakeTwoToneIcon from '@mui/icons-material/CakeTwoToneIcon';

/* custom styled components */
const GroupContainer = styled("div")`
  border-radius: 30px;
  background-color: white;
  margin: 15px;
  padding: 5px;
  .MuiTypography-root {
    font-family: "Nunito Sans", sans-serif;
  }
`;

const GroupDetails = styled("div")`
  display: flex;
  padding: 10px;
  margin-top: 5px;
  justify-content: space-between;
  border-bottom: 0.5px ridge #d5d0d0;
  .group-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex: 1;
  }
  .money {
    font-weight: 700;
    align-content: center;
  }
  .date {
    font-size: 12px;
    color: #7a7a7a;
    font-weight: 700;
  }
`;

const GroupAvatar = styled(Avatar)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
`;

const Balances = styled("div")`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Debt = styled("div")`
  display: flex;
  align-items: center;
  padding: 8px 10px;

  .debt-text {
    font-size: 13px;
    color: #7a7a7a;
    font-weight: 600;
  }

  .debt-amount {
  }
`;

const PersonBalance = styled("div")`
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.balanceAmount > 0
      ? "#ceffd0"
      : props.balanceAmount == 0
      ? "#f5f1e8"
      : "#ffe1e1"};
  align-content: center;
  justify-content: ${(props) =>
    props.balanceAmount == 0 ? "center" : "space-between"};

  .balance-text {
    margin-left: 10px;
    font-size: 15px;
    color: #7a7a7a;
  }

  .balance-amount {
    font-size: 15px;
    color: ${(props) =>
      props.balanceAmount > 0
        ? "#027927"
        : props.balanceAmount == 0
        ? "#f5f1e8"
        : "#b31c3a"};
    font-weight: 700;
  }
`;

/* Group class default export  */
export default function Group({ groupData, setPage, setParams }) {
  console.log("chandana: ", groupData);

  return (
    <GroupContainer>
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

      <Balances>
        {groupData.debts.map((debt) => {
          return (
            <Debt>
              <GroupAvatar width="25px" height="25px"></GroupAvatar>
              <Typography className="debt-text">
                {debtText(debt.personName, debt.amount, groupData.currency)}
              </Typography>
            </Debt>
          );
        })}
      </Balances>

      <PersonBalance balanceAmount={groupData.totalBalance}>
        <Typography className="balance-text">
          {totalBalanceText(groupData.totalBalance)}
        </Typography>
        <Typography className="balance-amount">
          {groupData.currency}
          {Math.abs(groupData.totalBalance)}
        </Typography>
      </PersonBalance>
    </GroupContainer>
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
        {debtee} owes you <b>{currency}{Math.abs(debtAmount)}</b>
      </>
    );
  }
  if (debtAmount < 0) {
    debtText = (
      <>
        you owe {debtee} <b>{currency}{Math.abs(debtAmount)}</b>
      </>
    )
   }

  return debtText;
}
