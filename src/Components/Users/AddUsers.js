import React ,{useState} from "react";

import Card from '../UI/Card'
import Button from '../UI/Button'
import inputs from './AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError ({
                title: 'Invalid username',
                message: 'Please enter a valid username and age'
            });
            return;
        }
        if (+enteredAge < 18){
            setError ({
                title: 'Invalid Age',
                message: 'Is to yang for be an user'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className = {inputs.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username'
                    type='text' 
                    value={enteredUsername} 
                    onChange ={usernameChangedHandler} />
                    <label htmlFor='age'>Age (years)</label>
                    <input id='age'
                    type='number' 
                    value={enteredAge} 
                    onChange ={ageChangedHandler} />
                    <Button type='submit'>Add User</Button> 
                </form>
            </Card>
        </div>
    )
};

export default AddUser;