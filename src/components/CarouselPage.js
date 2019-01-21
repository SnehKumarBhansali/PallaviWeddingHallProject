import React from 'react';
import { Carousel, CarouselInner, CarouselItem, View, CarouselCaption, Mask } from 'mdbreact';
import FirstImage from './Images/Carousel_Images/DSC_0055.JPG'
import SecondImage from './Images/Carousel_Images/IMG-20181109-WA0023.jpg'
import ThirdImage from './Images/Carousel_Images/DSC_0047.JPG'
import FourthImage from './Images/Carousel_Images/IMG-20181109-WA0005.jpg'
import FifthImage from './Images/Carousel_Images/DSC_0052.JPG'


const CarouselPage = () => {

  return (
    <Carousel
      activeItem={1}
      length={5}
      showControls={true}
      showIndicators={false}
      className="z-depth-1">
      <CarouselInner>
        <CarouselItem itemId="1">
          <View>
            <img className="d-block w-100" src={FirstImage} alt="Maitri Mahal" />
            <Mask overlay="black-light" />
          </View>
          <CarouselCaption>
            <a href="https://en.wikipedia.org/wiki/Yogi_Adityanath">
              <h4 className="h4-responsive white-text">Shree Yogi AdityaNath Ji</h4>
            </a>
            <p className="caption-p-size">At Maitri Mahal</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem itemId="2">
          <View>
            <img className="d-block w-100" src={SecondImage} alt="Maitri Mahal" />
          </View>
        </CarouselItem>
        <CarouselItem itemId="3">
          <View>
            <img className="d-block w-100" src={ThirdImage} alt="Maitri Mahal" />
          </View>
        </CarouselItem>
        <CarouselItem itemId="4">
          <View>
            <img className="d-block w-100" src={FourthImage} alt="Maitri Mahal" />
          </View>
        </CarouselItem>
        <CarouselItem itemId="5">
          <View>
            <img className="d-block w-100" src={FifthImage} alt="Maitri Mahal" />
          </View>
        </CarouselItem>

      </CarouselInner>
    </Carousel>

  );
}


export default CarouselPage;