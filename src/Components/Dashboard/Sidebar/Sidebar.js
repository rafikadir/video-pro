import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { userContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:4000/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then (res => res.json())
        .then (data => setIsAdmin(data))
    },[])

    return (
        <div className="order-sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/orderlist">Order list</Nav.Link>
                { isAdmin ||<Nav.Link href="/clientreview">Add Review</Nav.Link>}
                { isAdmin && <Nav.Link href="/addadmin">Add Admin</Nav.Link>}
                { isAdmin && <Nav.Link href="/addservice">Add Service</Nav.Link>}
            </Nav>
        </div>
    );
};

export default Sidebar;