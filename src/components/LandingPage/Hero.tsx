import React from "react";
import styled from "styled-components";
import hero from "../../Assets/hero.webp";
import money from "../../Assets/money.webp";
import hundred from "../../Assets/100.webp";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <TextHold>
              <Title>
                The best & most trusted platform to buy your Gift Cards and shop
                at any marketplace.
              </Title>
              <p>
                An awesome place to purchase securely with no worries or delay.
                It is perfectly built for you.
              </p>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <button>Use the Web App</button>
              </NavLink>
            </TextHold>
          </Left>
          <Right>
            <img src={hero} alt="" />

            <Money>{/* <img src={money} alt="" /> */}</Money>
            {/* <Hundred src={hundred} /> */}
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const TextHold = styled.div`
  margin-left: 40px;

  p {
    margin-top: 30px;
    width: 90%;
    font-size: 1.3rem;
    line-height: 139.6%;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 1.05rem;
    }
  }

  button {
    padding: 15px 35px;
    background-color: #9342f6;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    border: 0;
    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
      background-color: #8725fe;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Money = styled.div`
  position: absolute;
  right: 0px;
  top: 200px;

  img {
    width: 10vw;
  }
`;
const Hundred = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
`;

const Title = styled.h1`
  width: 90%;
  font-weight: 700;
  margin: 0;
  margin-top: 30px;
  font-size: 3rem;
  line-height: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    width: 89%;
    margin-top: 20px;
    line-height: 2rem;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 55vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 65vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: #f9f9f9;
  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 4rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 110px;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;
