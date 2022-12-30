// import Card from "./components/UI/Card";
// import Expenses from "./components/Expenses/Expenses";
// import "./components/UI/Card.css";

import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const [user, setUser] = useState([]);

  const [isFormEmpty, setIsFormEmpty] = useState(false);

  const registeredUser = (newUser) => {
    setUser((prevstate) => [...prevstate, newUser]);

    console.log(user);
  };
  return (
    <>
      <Card>
        <Form onSaveUser={registeredUser} onIsFormEmpty={setIsFormEmpty} />
      </Card>
      <div style={{ margin: "2rem 0" }}></div>
      {user.length > 0 && <UserList registeredUser={user} />}

      {isFormEmpty && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "rgba(33,33,33,0.6)",
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "20%",
              background: "#fff",
            }}
          >
            Hellowprd
          </div>
        </div>
      )}
    </>
  );
}

export default App;
