import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { userContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className="order-sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/order">Order</Nav.Link>
                <Nav.Link href="/orderlist">Order list</Nav.Link>
                <Nav.Link href="/clientreview">Review</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;