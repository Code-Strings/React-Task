import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = props =>
{
    const state = {
        user: [{
            id: 1,
            name: "test1",
            age: "11",
            gender: "male",
            email: "test1@gmail.com",
            phoneNo: "9415346313"
        },
        {
            id: 2,
            name: "test2",
            age: "12",
            gender: "male",
            email: "test2@gmail.com",
            phoneNo: "9415346314"
        },
        {
            id: 3,
            name: "test3",
            age: "13",
            gender: "male",
            email: "test3@gmail.com",
            phoneNo: "9415346315"
        },
        {
            id: 4,
            name: "test4",
            age: "14",
            gender: "male",
            email: "test4@gmail.com",
            phoneNo: "9415346316"
        },
        {
            id: 5,
            name: "test5",
            age: "15",
            gender: "male",
            email: "test5@gmail.com",
            phoneNo: "9415346317"
        },
        {
            id: 6,
            name: "test6",
            age: "16",
            gender: "male",
            email: "test6@gmail.com",
            phoneNo: "9415346318"
        }
        ]
    }
    return (
        <div>
            {(state.user.length == 0) ?
                (<div>
                    Loading....
                </div>) :
                (<Container fluid>
                    <Row noGutters>   <h1>Dashboard</h1></Row>
                    <Row><Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Contact No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.user.map((items, key) => (
                                    <tr key={key}>
                                        <td>{items.id}</td>
                                        <td>{items.name}</td>
                                        <td>{items.age}</td>
                                        <td>{items.gender}</td>
                                        <td>{items.email}</td>
                                        <td>{items.phoneNo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col></Row>
                </Container>)}
        </div>
    );
};

export default Dashboard;