import React from 'react';
import './MenuItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imagename, price}) => {
    return (
        <div>
            <div className = 'menuContainer'>
            <Container> 
                <Row>
                <Col xs={5} sm ={5} md= {5}>
                    <div className = 'menuimage'>
                    <img src={`/images/${imagename}`} />                    
                    </div>
                </Col>
                <Col xs={7} sm={7} md ={7}>
                <div className = 'titledesc'>
                    <h5>{title}</h5>
                    <h6>{description}</h6>
                </div>
                    
                    <div className = 'price'>
                        <p>${price}  <Button variant="outline-info" size ="small">Add</Button> </p>
                       
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default MenuItem;
