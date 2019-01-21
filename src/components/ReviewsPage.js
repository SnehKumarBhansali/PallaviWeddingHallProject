import React from 'react';
import { Container, Card, CardBody, Fa, CardGroup } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import pic1 from './Images/Reviews_Images/DSC06650.jpg'
import pic2 from './Images/Reviews_Images/IMG-20190113-WA0010.jpg'
import pic3 from './Images/Reviews_Images/IMG-20190113-WA0011.jpg'

const ReviewsPage = () => {

    const styles = {
        width: "150px",
        height: "150px",
        alignSelf: "center",
        marginTop: '20px'
    }
    return (
        <Container id="reviews">
            <section className="text-center my-4">
                <h2 className="h1-responsive font-weight-bold my-4">What our customers say</h2>

                <CardGroup deck>
                    <Card style={{border:"1px solid #ccc"}}>
                        <Avatar style={styles} src={pic1} />
                        <CardBody>

                            <h4 className="font-weight-bold mt-4">Sneh Kumar Bhansali</h4>
                            <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Attended friend's wedding here. It's a quite spacious and nice place.</p>
                            <div className="grey-text">
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star-half-full"> </Fa>
                            </div>

                        </CardBody>
                    </Card>
                    <Card style={{border:"1px solid #ccc"}}>
                        <Avatar style={styles} src={pic2} />
                        <CardBody>
                            <h4 className="font-weight-bold mt-4">Jitesh Mishra</h4>
                            <h6 className="blue-text font-weight-bold my-3">Software Engineer</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>I did my sister's wedding from this place. My home town is in Gorakhpur and I live in Mumbai, but staff of here made it hasle free and memorable experience. The staff took care of everything.</p>
                            <div className="grey-text">
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                            </div>
                        </CardBody>
                    </Card>

                    <Card style={{border:"1px solid #ccc"}}>
                        <Avatar style={styles} src={pic3} />
                        <CardBody>
                            <h4 className="font-weight-bold mt-4">Kalpnath Pandey</h4>
                            <h6 className="blue-text font-weight-bold my-3">Businessman</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>अपने बेटी की सगाई यहां से की थी, अति उत्तम वाव्यस्था थी। लगभग 1000 गेस्ट आए थे और सब लोग संतुष्ट थे। यहां के स्टाफ का सहयोग सराहनीय है।</p>
                            <div className="grey-text">
                                <Fa icon="star" > </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star-o"> </Fa>
                            </div>
                        </CardBody>
                    </Card>
                </CardGroup>

            </section>
        </Container>
    );
}

export default ReviewsPage;