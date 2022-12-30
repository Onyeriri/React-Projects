// import React, { useState } from "react";
import Card from "../Card/Card";
import User from "../User/User";

const UserList = ({ registeredUser }) => {
  return (
    <Card>
      <ul>
        {registeredUser.map((user, key) => (
          <User key={key} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
