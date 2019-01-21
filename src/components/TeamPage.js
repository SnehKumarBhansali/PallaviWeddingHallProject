import React from 'react';
import { Container, Row, Col, Card, CardBody, Fa, CardImage } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import TeamMember1 from './Images/Team_Images/RaviShankarTiwari.jpeg';
import TeamMember2 from './Images/Team_Images/Rishikesh.jpeg';
import TeamMember3 from './Images/Team_Images/AnisAhmed.jpeg';

const TeamPage = () => {
  const styles = {
    width: "250px",
    height: "250px",
    alignSelf: "center",
    marginTop: "20px",
    border:"3px solid grey"
  }
  return (
    <Container id="team">
      <section className="text-center my-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Meet Our Team</h2>
        <Row>
          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <Card style={{border:"1px solid #ccc"}}>
              <Avatar style={styles} src={TeamMember1} />
              <CardBody className="rounded-bottom">
                <h4>Ravi Shankar Tiwari</h4>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <Card style={{border:"1px solid #ccc"}}>
            <Avatar style={styles} src={TeamMember3} />
              <CardBody className="rounded-bottom">
                <h4>Anes Ahmed</h4>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <Card style={{border:"1px solid #ccc"}}>
            <Avatar style={styles} src={TeamMember2} />
              <CardBody className="rounded-bottom">
                <h4>Rishikesh</h4>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </section>
    </Container>
  );
};


export default TeamPage;