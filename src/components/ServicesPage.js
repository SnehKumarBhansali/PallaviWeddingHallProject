import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WhatShotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExplicitIcon from '@material-ui/icons/Explicit';
import PeopleIcon from '@material-ui/icons/People';
import CakeIcon from '@material-ui/icons/Cake';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import { Container, Card, CardBody, CardTitle, CardText, Button, Fa } from 'mdbreact';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ServicesPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Container id="services">
                <section className="text-center my-4">
                    <h2 className="h1-responsive font-weight-bold my-4">Our Services</h2>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                scrollable
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Marriage Ceremony" icon={<FavoriteIcon />} />
                                <Tab label="Exhibitions" icon={<ExplicitIcon />} />
                                <Tab label="Corporate Meetings" icon={<WhatShotIcon />} />
                                <Tab label="Trade Fair" icon={<PeopleIcon />} />
                                <Tab label="Annual Function" icon={<SchoolIcon />} />
                                <Tab label="Birthday Party" icon={<CakeIcon />} />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">Wedding Ceremonies</h4>
                                    <p className="font-weight-normal">Fully central AC halls which can accomodate more than 1000 people. We do <span className="pink-text font-italic">Engagement Ceremony, Tilak Ceremony, Haldi Ceremony, Mehendy Ceremony, Sangeet Ceremony, Marriage Ceremony, Reception, Godh Bharai and Upnayan Sanskar</span>. You will get all marraiage ceremony related solution under one roof.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>A successful marriage requires falling in love many times, always with same person.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                        {value === 1 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">Exhibitions</h4>
                                    <p className="font-weight-normal text-center">The sprawling AC halls makes it a very good place for exhibition.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>An exhibition is the result of your experiments, but the process is never-ending.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                        {value === 2 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">Corporate Meetings and Function</h4>
                                    <p className="font-weight-normal text-center">In <span className="pink-text font-italic">Maitri Mahal,</span> we can do sitting arrangement of more than 500 people in a single hall.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>Great things in bussiness are never done by one person. They're done by a team of people.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                        {value === 3 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">Mega Trade Fair</h4>
                                    <p className="font-weight-normal text-center">We have conducted many trade fair. The AC halls make a pleasant environment for the customers.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>Trade fair evokes a relationship between consumers and producers based on transparency, dialogue and respect.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                        {value === 4 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">School Annual Function</h4>
                                    <p className="font-weight-normal text-center">In <span className="pink-text font-italic">Maitri Mahal,</span> we have a very fine stage to conduct the annual function for school childrens.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>Dates that come around every year help us measure progress in our lives. One annual event, New Year's Day, is a time of reflection and resolution.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                        {value === 5 && <TabContainer>
                            <Card style={{ border: "1px solid #ccc" }}>
                                <CardBody className="text-justify">
                                    <h4 className="indigo-text text-center font-weight-bold mb-4">Birthday Party</h4>
                                    <p className="font-weight-normal text-center">In <span className="pink-text font-italic">Maitri Mahal,</span> we have huge hall and full amenity to conduct a bashfull birthday party.</p>
                                    <h6 className="font-weight-bold text-center pink-text"><Fa icon="quote-left" className="pr-2"></Fa>Its your birthday. Now you've more grown up. Every year you're becoming more perfect.<Fa icon="quote-right" className="pl-2"></Fa></h6>
                                </CardBody>
                            </Card>
                        </TabContainer>}
                    </div>
                </section>
            </Container>
        );
    }
}

ServicesPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesPage);
