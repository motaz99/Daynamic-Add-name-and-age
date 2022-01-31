import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList'

const App = () => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (listObj) =>{
    setUsersList([...usersList, listObj])
  }
  return (
    <div className="App">
        <AddUsers OnLiftingUsersListUp={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
