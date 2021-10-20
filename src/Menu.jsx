import React from "react";
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styleMenu.scss'


const Menu = () => (
    <>

<Dropdown>
  <Dropdown.Toggle variant="white" drop="start" >
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <span class="material-icons">&#xe7fe;</span> ADD FRIEND</Dropdown.Item>
    <Dropdown.Item href="#/action-2">
    <span class="material-icons">&#xe8af;</span> MESSAGING</Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <span class="material-icons">&#xe8b8;</span> CONFIGURATION</Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <span class="material-icons">&#xe9ba;</span> LOG OUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


    </>
)





export default Menu;