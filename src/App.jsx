import "./App.css";
import GroupsPage from "./pages/GroupsPage";
import Group from "./pages/Group";
import ExpensesPage from "./pages/ExpensesPage";
import { useState } from "react";

function App() {
  // const [page, setPage] = useState('GroupsPage')
  // const [params, setParams] = useState('');
  // const props = {
  //   page, setPage, params, setParams
  // }

  // let loadComponent;

  // if(page === 'GroupsPage') {
  //   loadComponent = <GroupsPage {...props}/>
  // } else if(page === 'ExpensesPage') {
  //   loadComponent = <ExpensesPage {...props}/>
  // }

  // return (
  //   <div className="App gradiant_background">
  //     {loadComponent}
  //   </div>
  // );

  const debts = [
    {
      "personName": "Riya",
      "amount": "100",
      'currency': "$"
    },{
      "personName": "Sena",
      "amount": "100",
      'currency': "$"
    }
  ];

  const debts2 = [
    {
      "personName": "John",
      "amount": "100",
      'currency': "$"
    },{
      "personName": "Wade",
      "amount": "100",
      'currency': "$"
    }
  ]

  return  <>
  <Group debtsList={debts} totalBalance="200" currency="$"></Group>
  <Group debtsList={debts2} totalBalance="0" currency="$"></Group>
  <Group debtsList={debts2} totalBalance="-2008.9" currency="$"></Group>
  </>;
}

export default App;
