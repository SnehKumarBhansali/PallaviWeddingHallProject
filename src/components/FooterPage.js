import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

const FooterPage = () => {

  return (
    <Footer color="indigo" className="font-small pt-0">
      <Container>
        <Row className="pt-4 mb-3 text-center d-flex justify-content-center">
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              About us
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <Row className="d-flex justify-content-center mb-md-0 mb-4">
          <Col md="12" sm="12" className="mt-3">
            <p style={{ lineHeight: "1.7rem" }}>
              With the intention to provide the best in class banquet hall facilities in Gorakhpur, we started our services in 2016 with the moto ' अतिथि देवो भव: '
            </p>
            <p style={{ lineHeight: "1.7rem" }}>
              The two sprawling central AC halls provide the best in class facilities to our users. Every marriage in our premises is consider as our family function and we take utmost care to make the family comfortable. We know that marriage happens once in life time and every marraige is special. With this in mind we make sure that every function becomes memorable.
            </p>
            <p style={{ lineHeight: "1.7rem" }}>
              In a very short span of time we have evolved ourselves to accomodate various large scale corporate meetings, trade fair, exhibitions, annual functions, birthday parties and so on.
            </p>
          </Col>
        </Row>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
        <Row className="pb-3">
          <Col md="12">
            <div className="mb-5 flex-center">
              <p>Find us on :{" "}
                <a className="fb-ic" href="https://www.facebook.com/Maitri-Mahal-1829595080503588/">
                  <i className="fa fa-facebook fa-lg white-text mr-md-4"> </i>
                </a>

                <a className="ins-ic" href="https://www.instagram.com/maitrimahalgkp/">
                  <i className="fa fa-instagram fa-lg white-text mr-md-4"> </i>
                </a>

                <a href="https://maitri-mahal.business.site/" >
                  <i className="fa fa-google fa-lg white-text mr-md-4"></i>
                </a>

                <a className="font-weight-bold" style={{fontSize:"15px"}} href="https://www.justdial.com/Gorakhpur/Maitri-Mahal-Marriage-Hall-Yamaha-Showroom-Kunraghat/9999PX551-X551-160809213056-Z4M1_BZDET">
                  Jd
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <span> Maitri Mahal Team</span>
        </Container>
      </div>
    </Footer>
  );
}

export default FooterPage;