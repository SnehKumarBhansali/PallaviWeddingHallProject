import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import ModalPage from './ModalPage';


class ContactPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {},
      formValid: false,
      showModal: false
    }
  }

  handleValidation() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = false;
    let nameValid = false;
    let mobileNumberValid = false;

    //Name
    if (fields.hasOwnProperty('name')) {
      const fullName = fields['name'].replace(/^\s+/g, '')
      if (fullName === '') {
        errors['name'] = "Name can't be empty";
      } else if (!fullName.match(/^[a-zA-Z ]+$/)) {
        errors['name'] = 'Only letters';
      }
      if (JSON.stringify(errors) === JSON.stringify({})) {
        nameValid = true
      }
    }

    //Mobile Number
    if (fields.hasOwnProperty('mobileNumber')) {
      const re = /^[0-9\b]+$/;
      if (fields['mobileNumber'] === '') {
        errors['mobileNumber'] = "Mobile Number can't be empty"
      } else {
        let mobileNumber = fields['mobileNumber'].replace(/\D/g, '');
        if (mobileNumber !== '') {
          mobileNumber = mobileNumber.replace(/^0+/, '')
          if (!re.test(mobileNumber) || mobileNumber.length !== 10) {
            errors['mobileNumber'] = "Invalid Mobile Number"
          }
        } else {
          errors['mobileNumber'] = "Please enter numeric digits only"
        }
      }
      if (JSON.stringify(errors) === JSON.stringify({})) {
        mobileNumberValid = true
      }
    }

    //all good
    if (nameValid && mobileNumberValid) {
      formIsValid = true
    }

    this.setState({ errors: errors });
    return formIsValid
  }

  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    const result = this.handleValidation()
    if (result) {
      this.setState({ formValid: result })
    }
  }

  handleClick = () => {
    this.setState({
      showModal: true
    })
  }

  handleModal = () => {

    this.setState((prevState) => {
      return {
        fields: {},
        errors: {},
        formValid: false,
        showModal: false
      }
    })
  }


  render() {
    return (
      <Container id="contact">
        <section className="my-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Let's get in touch</h2>
          <form>
            <Row>
              <Col lg="5" className="lg-0 mb-4">
                <Card style={{ border: "1px solid #ccc" }}>
                  <CardBody>
                    <div className="text-center">
                      <h3 className="indigo-text mb-5"><Fa icon="envelope" /><strong> Write to us</strong></h3>
                    </div>

                    <div className="md-form">
                      <Input
                        ref="name"
                        value={this.state.fields["name"] ? this.state.fields["name"].replace(/^\s+/g, '') : ''}
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        onChange={(event) => this.handleChange("name", event)} />
                      <span className="red-text text-left font-weight-normal">{this.state.errors["name"]}</span>
                    </div>

                    <div className="md-form">
                      <Input
                        ref="mobileNumber"
                        value={this.state.fields["mobileNumber"] ? this.state.fields["mobileNumber"].replace(/\D/g, '') : ''}
                        icon="mobile-phone"
                        label="Your Mobile Number"
                        iconClass="grey-text"
                        type="text"
                        onChange={(event) => this.handleChange("mobileNumber", event)} />
                      <span className="red-text text-left font-weight-normal">{this.state.errors["mobileNumber"]}</span>
                    </div>

                    <div className="md-form">
                      <Input
                        ref="msgData"
                        value={this.state.fields["msgData"] ? this.state.fields["msgData"] : ''}
                        icon="pencil"
                        label="Your Message"
                        iconClass="grey-text"
                        type="textarea"
                        onChange={(event) => this.handleChange("msgData", event)} />
                    </div>
                    <div className="text-center">
                      <Button
                        color={this.state.formValid ? "indigo" : "grey"}
                        disabled={!this.state.formValid}
                        onClick={this.handleClick}
                      >
                        Submit <i className="fa fa-paper-plane ml-2"></i>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="7">
                <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px', border: "1px solid #ccc" }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.168294141343!2d83.42271251504127!3d26.739005083202613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915b558e947e81%3A0x4d2dd30563ab0908!2sMaitri+Mahal!5e0!3m2!1sen!2sin!4v1547365177309" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} title='maps'></iframe>
                </div>
                <br />
                <Row className="text-center">
                  <Col md="4">
                    <Button tag="a" floating color="indigo" className="accent-1">
                      <Fa icon="map-marker" />
                    </Button>
                    <p>Kunraghat, Gorakhpur</p>
                    <p className="mb-md-0">Uttar Pradesh, India</p>
                  </Col>
                  <Col md="4">
                    <Button tag="a" floating color="indigo" className="accent-1">
                      <Fa icon="phone" />
                    </Button>
                    <p>+ 91 89350 30782</p>
                    <p>+ 91 70848 42222</p>
                    <p>+ 91 89350 30784</p>
                    <p>0551-2270097</p>
                  </Col>
                  <Col md="4">
                    <Button tag="a" floating color="indigo" className="accent-1">
                      <Fa icon="envelope" />
                    </Button>
                    <p>pathaksham17@gmail.com</p>
                    <p className="mb-md-0">pallavi.eiti@gmail.com</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </section>
        <ModalPage
          formValid={this.state.showModal}
          handleModal={this.handleModal}
          customerName={this.state.fields['name']}
        />
      </Container>
    );
  };
}

export default ContactPage;