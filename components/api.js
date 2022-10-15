import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";

const index = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://locahost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("Oops!! Authentication Failed!");
        })
        .then((resonseObject) => {
          setUser(resonseObject.user);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  console.log(user);
  {
    if (user) {
      return (
        <>
          <Navbar user={user} />
          <Home />
        </>
      );
    } else {
      return (
        <>
          <Navbar user={user} />
          <Login />
        </>
      );
    }
  }
};

export default index;
