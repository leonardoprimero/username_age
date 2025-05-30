import React ,{useState} from 'react';

import AddUser from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (uName,uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name:uName, age:uAge, id: Math.random().toString}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users= {usersList} />
    </div>
  );
}

export default App;
