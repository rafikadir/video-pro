import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { userContext } from '../../../App';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([])

    useEffect(()=>{


        fetch('http://localhost:4000/orders')
        .then(res=>res.json())
        .then(data =>{
            setOrders(data);
        })
    },[])

    console.log(loggedInUser);

    return (
        <div>
            <Navmenu></Navmenu>
            <Container className="order-area">
                <Row>
                    <Col lg={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={9}>
                       <h1>Hello, {loggedInUser.username}</h1>
                    <ul>
                        {
                            orders.map(order => <li>Name:{order.name} , Price:{order.price}</li> )
                        }
                    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderList;