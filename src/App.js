import './App.css';
import { useState } from 'react';
import MenuItem from './components/MenuItem';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

const headerInfo = {
  title: 'The Fresh Choice Of UT!',
  description: 'Delicious, From-Scratch Recipes Close at Hand!',
  logo: 'cinnamocafe.png'
}
// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

export const HeaderItems = ({title, description, logo}) => {
  return(
      <Container fluid> 
        <Col sm={{span: 4}}>
        <div className = "headerimg">
        <img src= {(process.env.PUBLIC_URL+"/images/"+logo)}></img>
        </div>
        <div className = "textheader">
          <h4>{description}</h4>
          <h2>{title}</h2>
        </div>
      </Col>
      </Container>
  )
}

export const SubTotalComponent = ({subTotal, setSubTotal, setItemCt, itemCt}) =>{
  return(
    <Container fluid>
      <p>Subtotal: ${subTotal} <Button variant = "outline-info" onClick = {()=> {
        let order = "";
        itemCt.forEach((element, index) => {
          if (element !== 0) {
            order += `${element} ` + menuItems[index].title + "\n";
          }
        });
        if (order === "") {
          order = "No items added to cart yet. Cannot place an order.";
        } else {
          order = "Order placed! \n" + order;
        }
        alert(order)}}>Order</Button> 
      <Button variant="outline-info" onClick ={() => {
                            setItemCt([0,0,0,0,0,0,0,0,0,0]);
                            setSubTotal(0);
                         }}>Clear All</Button></p>
    </Container>
  )
}




function App() {
  const [itemCt, setItemCt] = useState([0,0,0,0,0,0,0,0,0,0])
  const [subTotal, setSubTotal] = useState(0);
  return (
   

    <div className = "screen">
      <div className ="header">
        <HeaderItems title={headerInfo.title} description={headerInfo.description} logo = {headerInfo.logo}/>
      </div>
      <div className="menu">
      {menuItems.map(item => (
          <MenuItem
            id = {item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imagename={item.imageName}
            itemCt = {itemCt}
            setItemCt={setItemCt}
            subTotal = {subTotal}
            setSubTotal = {setSubTotal}
          />
        ))
        }
      </div>
      <div className = 'subTotalAndOrder'>
        <SubTotalComponent subTotal={subTotal} setSubTotal={setSubTotal}  setItemCt = {setItemCt} itemCt = {itemCt}></SubTotalComponent>
      </div>
    </div>
  );
}

export default App;
