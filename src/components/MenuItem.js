import React from 'react';
import { useState } from 'react';
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

const MenuItem = ({id, title, description, imagename, price, itemCt, setItemCt, subTotal, setSubTotal}) => {
    return (
        <div>
            <div className = 'menuContainer'>
            <Container> 
                <Row>
                <Col xs={5} sm ={5} md= {5}>
                    <div className = 'menuimage'>
                    <img src={process.env.PUBLIC_URL + '/images/'+ imagename} alt = {title}/>
                    </div>
                </Col>
                <Col xs={7} sm={7} md ={7}>
                <div className = 'titledesc'>
                    <h5>{title}</h5>
                    <h6>{description}</h6>
                </div>
                <div className = "price">
                       <Row className = "prices"> 
                        <Col className = 'pricetag'> 
                        ${price}  
                        </Col>
                        <Col className = 'addButton'>
                         <Button variant="outline-info" className = "small-button" onClick={() => {
                            setItemCt(itemCt => {
                                const newItemCt = [...itemCt]; 
                                newItemCt[id - 1] += 1; 
                                return newItemCt;});
                            setSubTotal(Math.round((subTotal + price) * 100)/ 100);
                         }}>+</Button>
                         </Col>
                         <Col className = 'itemCount'>
                         {itemCt[id-1]}
                         </Col> 
                         <Col className = 'subButton'>
                         <Button variant="outline-info" className = "small-button" onClick={() =>{
                            setItemCt(itemCt => {
                                const newItemCt = [...itemCt]; 
                                newItemCt[id - 1] = Math.max(newItemCt[id-1] -1, 0); 
                                return newItemCt;});                             
                            setSubTotal(Math.round(Math.max(subTotal-price, 0)*100)/100);
                         }}>-</Button>
                        </Col>
                        </Row>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default MenuItem;
