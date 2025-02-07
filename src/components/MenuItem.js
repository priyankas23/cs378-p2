import React from 'react';
import './MenuItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imagename}) => {
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
                    <h1>{title}</h1>
                </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default MenuItem;
