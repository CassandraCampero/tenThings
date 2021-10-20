import React from "react";
import { Col, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from './resources/animeAvatar.png'
import './styles/styleAvatar.scss'


const Avatar = () => (
    <>

<Container>
  
    
    <Col className="col-avatar">
      <Image src={avatar} roundedCircle className='picture'/>
    </Col>
   
    <h3 className="nick-name">NerdGirl</h3>
   
   
   
   
          <label className="description-user">No estoy loco, mi realidad es diferente a la tuya</label>
   
   
 
</Container>

    </>
)





export default Avatar;