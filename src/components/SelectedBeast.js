
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class SelectedBeast extends React.Component {
    render () {
  return (
    
    <div>


       <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>{this.props.beastItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Card.Img variant="top"  src={this.props.beastItem.imgUrl} alt="hornedBeast" title="hornedBeast" /></Modal.Body>
        <Modal.Footer>
          <Modal.text>{this.props.beastItem.description}</Modal.text>
          <Button variant="primary" onClick={this.props.handleClose}>
        Close
      </Button>
        </Modal.Footer>
      </Modal>

    </div>
    
    )
    }
    }



export default SelectedBeast;