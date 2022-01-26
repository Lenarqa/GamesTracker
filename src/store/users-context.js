import React, { useState, useEffect, useCallback } from "react";

export const UsersContext = React.createContext({
  users: [],
  addUser: (uId, name) => {},
});

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    fetch(process.env.React_app_firebase_url + "users.json")
      .then((response) => response.json())
      .then((data) => {
          const updatedUsers = [];
        for (const key in data) {
          const newUser = {
            uId: data[key].uId,
            name: data[key].name,
          };
          updatedUsers.push(newUser);
        }
        setUsers(updatedUsers);
      })
      .catch((error) => {
        throw new Error("Bag get user request");
      });
  },[]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const addUserHandler = (uId, name) => {
    console.log(users);
    console.log(
      "Есть ли пользователь в массиве?" + users.some((item) => item.uId === uId)
    );
    if (users.some((item) => item.uId === uId)) {
      console.log("пользователь уже существует");
      return;
    }

    let newUser = {
      uId: uId,
      name: name,
    };

    fetch(process.env.React_app_firebase_url + "users.json", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status) {
          getUsers();
        }
      })
      .catch((error) => {
        throw new Error("Bad post request");
      });
  };

  let contextValue = {
    users: users,
    addUser: addUserHandler,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
