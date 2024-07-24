import products_dummy from "../dummy-rest-responses/products-dummy";
import Group from "./Group";

import {
  List
} from "@mui/material";

export default function GroupsPage({ setPage, setParams }) {
  const groupsList = products_dummy.data;
  return (
    <>
      <List>
        {
          groupsList.map((groupData) => {
            return <Group groupData={groupData} setPage={setPage} setParams={setParams} />
          })
        }
      </List>
    </>
  );
}