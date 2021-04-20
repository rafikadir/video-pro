import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Container,Row, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import axios from 'axios';
import Navmenu from '../../Shared/Nav/Navmenu';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';


const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key','36a875d27fe76986995215b3d007796c');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            setImageURL(res.data.data.display_url);
        })
        .catch(error => {
            console.log(error);
        })
    };

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: imageURL
        }

        const url = `https://desolate-crag-48774.herokuapp.com/addService`;
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

        alert("Service Added!");
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
                            <input name="service" {...register('name')} />
                            <br/>
                            <label>Service Price:</label><br/>
                            <input name="price" type="number" {...register('price')} />     
                            <br/>
                            <label>Service Description:</label><br/>
                            <input name="description" {...register('description')} />
                            <br/>
                            <label>Upload Image:</label><br/>           
                            <input onChange={handleImage} type="file"/><br/>                    
                            <input value="Add Service" className="submit" type="submit"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddService;