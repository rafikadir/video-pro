import React, { useContext, useState } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';
import './Addadmin.css';

const Addadmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch,formState: { errors } } = useForm();

    const onSubmit = data =>{
        const admin = {
            email: data.email
        }
        fetch('https://desolate-crag-48774.herokuapp.com/addadmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then (res => res.json())
        .then(result => {
            console.log(result);
        })
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
                        <form className="addAdmin" onSubmit={handleSubmit(onSubmit)}>
                            <label>Enter Email:</label><br/>
                            <input type="email" name="email" {...register("email")}/><br/>
                            <input value="Add" type="submit" class="btn btn-primary"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Addadmin;