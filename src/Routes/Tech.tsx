import styled from "styled-components";
import React from "react";
import Carousel from "react-material-ui-carousel";

const Wrapper = styled.div`
  margin: 79px;

  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselSlider = styled(Carousel)`
  width: 900px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  flex-direction: column;
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
  flex-direction: column;
  margin: 0 auto;
`;

const Img = styled.div`
  height: 400px;
  width: 400px;
  background-color: aqua;
`;

const Exp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tech() {
  return (
    <Wrapper>
      <Row>
        <CarouselSlider
          fullHeightHover={true}
          indicators={true}
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          animation="slide"
        >
          <Box>
            <Img />
            <Exp>HTML/CSS</Exp>
          </Box>
          <Box>
            <Img />
            <Exp>JS</Exp>
          </Box>
          <Box>
            <Img />
            <Exp>ReactJS</Exp>
          </Box>
          <Box>
            <Img />
            <Exp>Python</Exp>
          </Box>
          <Box>
            <Img />
            <Exp>Typescript(WIP)</Exp>
          </Box>
          <Box>
            <Img />
            <Exp>React Native(WIP)</Exp>
          </Box>
        </CarouselSlider>
      </Row>
    </Wrapper>
  );
}

export default Tech;
