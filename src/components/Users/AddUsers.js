import React, {useState} from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
import classes from './AddUsers.module.css'
const AddUsers = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const addUserHandler = (e) =>{
        e.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                tittle: 'Invalid Input',
                message: 'You should input a name and age to make this work'
            })
            return;
        };
        if(+enteredAge < 1){
            setError({
                tittle: 'Invalid Input',
                message: 'There is no minus Negative age :)'
            })
            return;
        }
        const usersListObj = {
            userName: enteredUserName,
            userAge: enteredAge,
        };
        props.OnLiftingUsersListUp(usersListObj)
        setEnteredUserName('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (e) =>{
        setEnteredUserName(e.target.value)
    };
    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value)
    };
    const errorHandler = () => {
        setError(null)
    }
  return( 
      <Wrapper>
        {error && (
          <ErrorModal
             tittle={error.tittle}
             message={error.message}
             onConfirm={errorHandler}                
              />
              )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age (Year)</label>
            <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
            <Button type='submit'>Add user</Button>
        </form>
      </Card>
      </Wrapper>
  )
};

export default AddUsers;
 