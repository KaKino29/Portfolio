import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

const Wrapper = styled.div`
  margin: 20vh;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
`;

// const Loading = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselSlider = styled(Carousel)`
  width: 900px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
`;

const Box = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Wrapper>
      <Row>
        <CarouselSlider
          fullHeightHover={true}
          indicators={false}
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          animation="slide"
        >
          <Box>
            <Title>1</Title>
            <Content>1111</Content>
          </Box>
          <Box>
            <Title>2</Title>
            <Content>2222</Content>
          </Box>
          <Box>
            <Title>3</Title>
            <Content>3333</Content>
          </Box>
          <Box>
            <Title>4</Title>
            <Content>4444</Content>
          </Box>
        </CarouselSlider>
      </Row>
    </Wrapper>
  );
}

export default Home;
