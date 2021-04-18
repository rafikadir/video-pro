import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import serviceImage from '../../../Images/3.jpg';
import SingleService from '../SingleService/SingleService';

const services = [
    {
        name: 'Explainer videos',
        image: serviceImage,
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolore, deserunt provident suscipit voluptate!"
    }, 
    {
        name: 'Wedding videos',
        image: serviceImage,
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolore, deserunt provident suscipit voluptate!"
    },
    {
        name: 'Business videos',
        image: serviceImage,
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolore, deserunt provident suscipit voluptate!"
    }  
]

const Services = () => {
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