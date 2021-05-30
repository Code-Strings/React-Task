import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm({ Login })
{
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const submitHandler = e =>
    {
        e.preventDefault();

        Login(credentials);
    }

    return (

        <Container>

            <Form onSubmit={submitHandler}>
                <h2>Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                        value={credentials.username} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        value={credentials.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>

    )
}
export default LoginForm;