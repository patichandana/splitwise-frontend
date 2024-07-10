import products_dummy from "../dummy-rest-responses/products-dummy";
import Debts from "../components/Debts";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function GroupsPage({ setPage, setParams }) {
  return (
    <>
      <GroupList groupsList={products_dummy.data} setPage={setPage} setParams={setParams}/>
    </>
  );
}

function GroupList({ groupsList, setPage, setParams }) {
  return (
    <List>
      {groupsList.map((group) => (
        <Group groupData={group} setPage={setPage} setParams={setParams}/>
      ))}
      ;
    </List>
  );
}

function Group({ groupData, setPage, setParams }) {
  function handleGroupClick(event, groupData) {
    console.log(event, groupData);
    setPage('ExpensesPage')
    setParams({'groupId': groupData.groupId})
  }

  return (
    <>
      {
        <ListItem alignItems="flex-start">
          <ListItemButton
            onClick={(event) => handleGroupClick(event, groupData)}
          >
            <ListItemAvatar>
              <Avatar
                alt={groupData.group}
                src="./logo.png"
                variant="square"
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={groupData.group}
              primaryTypographyProps={{ variant: "body1", color: "black" }}
              secondary={
                <Debts
                  debts={groupData.debts}
                  totalBalance={groupData.balance}
                  currency={groupData.currency}
                />
              }
            />
          </ListItemButton>
        </ListItem>
      }
    </>
  );
}
