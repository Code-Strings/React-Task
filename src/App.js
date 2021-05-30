import React, { Component, useState } from "react";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/Login";
import Alert from "react-bootstrap/Alert";
import { Button, Row, Col } from "react-bootstrap";

function App()
{
  const userLogin = {
    username: "hruday@gmail.com",
    password: "hruday123",
    loggedin: Boolean,
    errormsg: ""
  }

  const [user, setUser] = useState({ username: "", password: "" });
  const [err, setError] = useState(true);

  const Login = (Credentials, err) =>
  {
    console.log(Credentials);
    console.log(userLogin);
    if (Credentials.username === userLogin.username && Credentials.password === userLogin.password)
    {
      console.log("Logged in!");
      setUser({
        username: Credentials.username,
        password: Credentials.password,
        loggedin: true
      });
      console.log(user);
    }
    else
    {
      console.log("Credentials do not match!");
      setError(false);
      console.log(err);
    }
  }

  const LogOut = () =>
  {
    setUser({ username: "", password: "" });
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div className="home">
          <Dashboard />
          <Row noGutters><Col><Button onClick={LogOut}>Log Out</Button></Col></Row>
        </div>
      ) : (
        <div>
          <LoginForm Login={Login} error={err} />
          {err ? <p></p> : <Alert variant="danger" onClose={() => setError(true)} dismissible>
            <Alert.Heading>Error!</Alert.Heading>
            <p>
              entered user name or password is wrong!
              </p>
          </Alert>}
          {console.log("check==> " + user.loggedin)}
        </div>
      )}
    </div>

  )
}
export default App;
