import React from 'react';
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = ({users}) => {
  return(
      <Card className={classes.users}>

      <ul>
        {users.map((user) => (
            <li key={Math.random().toString()}>
                {user.userName} ({user.userAge} Years old)
            </li>
            ))}
      </ul>

      </Card>
  );
};

export default UsersList;
