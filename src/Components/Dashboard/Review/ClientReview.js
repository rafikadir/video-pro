import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';

const ClientReview = () => {
    return (
        <div>
             <Navmenu></Navmenu>
            <Container className="order-area">
                <Row>
                    <Col lg={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={9}>
                       <h1>There reviews here</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientReview;