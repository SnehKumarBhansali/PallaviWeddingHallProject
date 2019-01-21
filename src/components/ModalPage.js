import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


const ModalPage = (props) => {

    return (
        <Container>
            <Modal isOpen={props.formValid} toggle={props.handleModal} centered>
                <ModalHeader toggle={props.handleModal}>Thanks from Maitri Mahal</ModalHeader>
                <ModalBody>
                    Thanks <strong>{props.customerName}</strong> for contacting us. We will reach out to you with in two business working days.
          </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default ModalPage;