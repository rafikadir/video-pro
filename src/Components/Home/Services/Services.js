import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/services/')
        .then(res=>res.json())
        .then(data =>{
            setServices(data);
        })
    },[])

    return (
        <section className="pb-70">
            <Container>
                <div className=" text-center service-heading">
                    <h6>Services</h6>
                    <h1>Our Core Services</h1>
                </div>

                <Row>
                    {
                        services.map(service => <SingleService service={service}></SingleService>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;