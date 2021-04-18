import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';
import './MakeOrder.css';

const MakeOrder = () => {

    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
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
                        <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
                            <label>Service Name:</label><br/>
                            <input  {...register("example")} />
                            <br/>
                            <label>Service Price:</label><br/>
                            <input  {...register("exampleRequired")} />     
                            <br/>                   
                            <input className="submit" type="submit"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeOrder;