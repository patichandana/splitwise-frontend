import products_dummy from "../dummy-rest-responses/products-dummy";
import Debts from "../components/Debts";
import ImageIcon from "@mui/icons-material/Image";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider
} from "@mui/material";

export default function GroupsPage({ setPage, setParams }) {
  return (
    <>
      <GroupList
        groupsList={products_dummy.data}
        setPage={setPage}
        setParams={setParams}
      />
    </>
  );
}

function GroupList({ groupsList, setPage, setParams }) {
  return (
    <List>
      {groupsList.map((group) => (
        <Group2 groupData={group} setPage={setPage} setParams={setParams} />
      ))}
      ;
    </List>
  );
}

function Group2({ groupData, setPage, setParams }) {
  function handleGroupClick(event, groupData) {
    console.log(event, groupData);
    setPage("ExpensesPage");
    setParams({ groupId: groupData.groupId });
  }

  return (
    <ListItem
      sx={{
        "& .MuiListItemText-root": {
          width: "27px"
        },
        bgcolor: "white",
        borderRadius: "20px",
        m: "10px",
      }}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={groupData.group}
          secondary={groupData.createdAt}
        />
        <ListItemText
          sx={{
            width:"fit-content",
            "& .MuiListItemText-root": {
              width: "27px"
            },
            "& .MuiTypography-root": {
              m:0,
              width: "fit-content",
              fontWeight: "bold",
            },
          }}
          primary={groupData.totalAmount}
        />
        <Divider component="li" sx={{
          "& .MuiDivider-root" : {
            border: "1px", 
            width: 100
          }
        }}/>
      </ListItemButton>
    </ListItem>
  );
}

function Group({ groupData, setPage, setParams }) {
  function handleGroupClick(event, groupData) {
    console.log(event, groupData);
    setPage("ExpensesPage");
    setParams({ groupId: groupData.groupId });
  }

  return (
    <>
      {
        <ListItem class="group" alignItems="flex-start">
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
