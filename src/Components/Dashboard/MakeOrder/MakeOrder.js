import React, { useContext, useEffect, useState } from 'react';
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import Navmenu from '../../Shared/Nav/Navmenu';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import './MakeOrder.css';

const MakeOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {handleSubmit, watch,formState: { errors } } = useForm();

    const {serviceid} = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services/')
        .then(res => res.json())
        .then(data => {
            const serviceList = data;
            const services = serviceList.find(service => service._id === serviceid);
            setService(services);
        });
    },[serviceid]);


    const handleBtn  = (e) =>{
        const orderInfo = {...loggedInUser, ...service}
        const serviceData = {
            name: orderInfo.name,
            price: orderInfo.price,
            orderInfo: orderInfo.email
        }
        console.log(orderInfo);

        const url = `http://localhost:4000/addOrder`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(response =>{
            console.log("Server Response", response)
        })

        alert("Order Added!");

        e.preventDefault();
    };

    return (
        <div>
            <Navmenu></Navmenu>
            <Container className="order-area pt-100">
                <Row>
                    <Col lg={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={4}>
                        <form className="service-form">
                            <h6>Service Name: {service.name}</h6><br/>
                            <br/>
                            <h6>Service Price: ${service.price}</h6><br/>
                            <br/>                   
                            <Payment></Payment>
                            <Button onClick={handleBtn} className="submit">Order Now</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeOrder;