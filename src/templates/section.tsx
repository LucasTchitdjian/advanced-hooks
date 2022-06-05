import React from "react"
import styled from "styled-components"

function Section() {
  return (
    <Wrapper>
      <HeroWrapper>
        <Illustration
          src="images/illustrations/illustration-1.png"
          alt="illustration"
        />
        <Title>Intro to REACT Hooks</Title>
        <Description>
          An overview of React Hooks and the framwork you can use to build your
          React application bllazingly fast
        </Description>
      </HeroWrapper>
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const HeroWrapper = styled.div`
  display: grid;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
`

const Illustration = styled.img`
  padding-top: 140px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  max-width: 500px;
  margin: 0 auto;

  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
`
