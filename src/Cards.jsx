import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import oaxaca from './resources/oaxaca.jpeg'
import PropTypes from "prop-types";

const Cards = ({img}) => (
    <>

   

<Card style={{ width: `13rem`, margin:'0px', padding:"0px 0px 0px 0px" }} >
  <Card.Img variant="top" src={img}/>
  
 

</Card>


    </>
)



  Cards.propTypes = {
    
    img: PropTypes.string
}

Cards.defaultProps = {
   
    img: oaxaca
}

export default Cards;

