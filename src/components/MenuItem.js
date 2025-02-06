import React from 'react';
import './MenuItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imagename}) => {
    return (
        <div>
            <div className = 'menuContainer'>
            <Container> 
                <h1> Yo </h1>
            </Container>
            </div>
        </div>
    );
};

export default MenuItem;
