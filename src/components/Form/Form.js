import React, { useState } from "react";
import Button from "../Button/Button";
import UserList from "../UserList/UserList";

const Form = ({ onSaveUser, onIsFormEmpty }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      userInput.age.trim().length === 0 ||
      userInput.username.trim().length === 0
    ) {
      onIsFormEmpty(true);
      return;
    }

    onSaveUser(userInput);

    setUserInput({
      username: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          onChange={(event) => {
            setUserInput({
              ...userInput,
              username: event.target.value,
            });
          }}
          value={userInput.username}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={(event) => {
            setUserInput({
              ...userInput,
              age: event.target.value,
            });
          }}
          value={userInput.age}
          type="number"
          name="age"
          id="age"
        />
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
};

export default Form;
