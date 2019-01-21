import React from 'react';
import { Container, Modal, ModalFooter, Button, Row, Col } from 'mdbreact';
import pic1 from './Images/Gallary_Images/IMG-20181109-WA0000.jpg';
import pic2 from './Images/Gallary_Images/IMG-20181109-WA0009.jpg';
import pic3 from './Images/Gallary_Images/IMG-20181109-WA0012.jpg';
import pic4 from './Images/Gallary_Images/IMG-20181109-WA0021.jpg';
import pic5 from './Images/Gallary_Images/IMG-20181109-WA0025.jpg';
import pic6 from './Images/Gallary_Images/IMG-20181109-WA0036.jpg';
import pic7 from './Images/Gallary_Images/IMG-20181109-WA0057.jpg';

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalData: undefined
        };
    }

    toggle = (src) => {
        if (src) {
            this.setState((prevState) => {
                return {
                    modal: !prevState.modal,
                    modalData: src
                }
            })
        }
    }


    render() {

        return (
            <Container id="gallery">
                <section className="text-center my-4">
                    <h2 className="h1-responsive font-weight-bold my-4">Gallery</h2>
                    <Row>
                        <Col xl='4' sm='12'>
                            <img className='z-depth-3 rounded mb-4' src={pic1} width="100%" height="auto" onClick={() => this.toggle(pic1)} alt="maitrimahal"/>
                            <img className='z-depth-3 rounded mb-4' src={pic2} width="100%" height="auto" onClick={() => this.toggle(pic2)} alt="maitrimahal"/>
                        </Col>
                        <Col xl='4' sm='12'>
                            <img className='z-depth-3 rounded mb-4' src={pic3} width="100%" height="auto" onClick={() => this.toggle(pic3)} alt="maitrimahal"/>
                            <img className='z-depth-3 rounded mb-4' src={pic4} width="100%" height="auto" onClick={() => this.toggle(pic4)} alt="maitrimahal"/>
                            <img className='z-depth-3 rounded mb-4' src={pic5} width="100%" height="auto" onClick={() => this.toggle(pic5)} alt="maitrimahal"/>
                        </Col>
                        <Col xl='4' sm='12'>
                            <img className='z-depth-3 rounded mb-4' src={pic6} width="100%" height="auto" onClick={() => this.toggle(pic6)} alt="maitrimahal"/>
                            <img className='z-depth-3 rounded mb-4' src={pic7} width="100%" height="auto" onClick={() => this.toggle(pic7)} alt="maitrimahal"/>
                        </Col>
                    </Row>

                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} size="fluid">

                        <img src={this.state.modalData} alt='' />

                        <ModalFooter>
                            <Button color="primary" onClick={(event) => this.toggle(event)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </section>
            </Container>
        )
    }
}

export default GalleryPage;