import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="pt-100">
            <Navmenu></Navmenu>
            <Container className="order-area">
                <Row>
                    <Col lg={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={9}>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderList;