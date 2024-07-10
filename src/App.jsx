import "./App.css";
import GroupsPage from "./pages/GroupsPage";
import ExpensesPage from "./pages/ExpensesPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState('GroupsPage')
  const [params, setParams] = useState('');
  const props = {
    page, setPage, params, setParams
  }

  let loadComponent;

  if(page === 'GroupsPage') {
    loadComponent = <GroupsPage {...props}/>
  } else if(page === 'ExpensesPage') {
    loadComponent = <ExpensesPage {...props}/>
  }

  return (
    <div className="App">
      {loadComponent}
    </div>
  );
}

export default App;
