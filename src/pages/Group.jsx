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
  margin: 10px;
  justify-content: space-between;
  border-bottom: 0.5px ridge #d5d0d0;
  .group-details {
    display: flex;
    flex: 1;
  }
  .money {
    font-weight: 500;
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
`;

const Debt = styled("div")`
  display: flex;
  padding: 8px 10px;

  .debt-text {
    font-size: 15px;
    color: #7a7a7a;
    // font-weight: 700;
  }
`;

const PersonBalance = styled("div")`
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  background-color: ${(props) => (props.balanceAmount > 0 ? "#ceffd0" : (props.balanceAmount ==0) ? "#f5f1e8" : "#ffe1e1")};
  align-content: center;
  justify-content: ${(props) => props.balanceAmount ==0 ? "center": "space-between"};

  .balance-text {
    margin-left: 10px;
    font-size: 15px;
    color: #7a7a7a;
  }

  .balance-amount {
    font-size: 18px;
    color: ${(props) => (props.balanceAmount > 0 ? "#027927" : (props.balanceAmount ==0) ? "#f5f1e8" : "#b31c3a")};
    font-weight: 700;
  }
  `;

/* Group class default export  */
export default function Group({ debtsList, totalBalance, currency }) {
  console.log(debtsList);
  let totalBalanceText;

  if (totalBalance == 0) {
    totalBalanceText = "Settled up";
  } else if (totalBalance > 0) {
    totalBalanceText = "You are owed";
  } else if (totalBalance < 0) {
    totalBalanceText = "You owe";
  }

  return (
    <GroupContainer>
      <GroupDetails>
        <GroupAvatar width="30px" height="30px"></GroupAvatar>
        <div className="group-details">
          <Typography>Birthday House</Typography>
          <Typography className="date">Mar 24, 2023</Typography>
        </div>
        <Typography className="money">$4000</Typography>
      </GroupDetails>

      <Balances>
        {debtsList.map((debt) => {
          return (
            <Debt>
              <GroupAvatar width="25px" height="25px"></GroupAvatar>
              {debt.amount > 0 ? (
                <Typography className="debt-text">
                  {debt.personName} owes you {debt.currency}
                  {debt.amount}
                </Typography>
              ) : (
                <Typography className="debt-text">
                  you owe {debt.personName} {debt.currency}
                  {debt.amount}
                </Typography>
              )}
            </Debt>
          );
        })}
      </Balances>

      <PersonBalance balanceAmount={totalBalance}>
        <Typography className="balance-text">{totalBalanceText}</Typography>
        <Typography className="balance-amount">{currency}{totalBalance}</Typography>
      </PersonBalance>
    </GroupContainer>
  );
}

function Debts({}) {}
