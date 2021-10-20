import { Modal, Button, Image} from 'react-bootstrap';
import React from "react";
import Cards from './Cards';
import PropTypes from "prop-types";
import oaxaca from './resources/oaxaca.jpeg'
import './styles/styleCard.scss'
import avatar from './resources/animeAvatar.png'

function MyVerticallyCenteredModal(props) {
   
    return (
      <Modal
      
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header className="heading">
          <Modal.Title id="contained-modal-title-vcenter">
          {props.mheading}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
         
          <p>
            {props.description}
          </p>
        </Modal.Body>
        <Modal.Footer className="footer">
        <Image src={avatar} roundedCircle style={{ width: '40px', height:'45px' }}/>
        <span className="material-icons md-56">&#xe867;</span>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Modales({mheading, description,img }) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>

       
        <Button 
            variant="primary" 
            onClick={() => setModalShow(true)} 
            style={{    margin:'0px', 
                        padding:"0px 0px 0px 0px", 
                        border:'0px',
                        backgroundColor:'white' }}
        >
        <Cards img={img}/>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          mheading={`${mheading}`}
          description={`${description}`}
          
         
        />
      </>
    );
  }
  

  Modales.propTypes = {
    
    mheading: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string

}

Modales.defaultProps = {
   
    mheading: 'Viajar',
    description: 'Viajar por el mundo y conocer mi país es de las experiencias desde mi parecer más enriquecedoras que la vida nos brinda',
    img: oaxaca
}
  export default Modales;
